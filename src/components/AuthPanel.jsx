import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, UserPlus, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function AuthPanel({ onAuth }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const supabaseConfigured = Boolean(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  useEffect(() => {
    let mounted = true;
    async function getSession() {
      try {
        const { data, error: err } = await supabase.auth.getSession();
        if (err) throw err;
        if (mounted && data?.session?.user) onAuth?.(data.session.user);
      } catch (e) {
        // ignore
      }
    }
    if (supabaseConfigured) getSession();
    return () => {
      mounted = false;
    };
  }, [onAuth, supabaseConfigured]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!supabaseConfigured) {
      setError('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env');
      return;
    }
    setLoading(true);
    setError('');
    try {
      if (mode === 'login') {
        const { data, error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
        onAuth?.(data.user ?? data.session?.user ?? null);
      } else {
        const { data, error: err } = await supabase.auth.signUp({ email, password });
        if (err) throw err;
        onAuth?.(data.user ?? null);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="w-full max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{mode === 'login' ? 'Log in to your account' : 'Create your account'}</h3>
        <div className="text-xs px-2 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">Supabase</div>
      </div>
      {!supabaseConfigured && (
        <div className="mb-4 flex items-start gap-2 text-amber-600 dark:text-amber-400 text-sm">
          <AlertCircle className="h-4 w-4 mt-0.5" />
          <p>Auth is disabled until environment variables are added. Provide VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.</p>
        </div>
      )}
      {error && (
        <div className="mb-4 flex items-start gap-2 text-rose-600 dark:text-rose-400 text-sm">
          <AlertCircle className="h-4 w-4 mt-0.5" />
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input type="email" placeholder="you@jayviklabs.com" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 outline-none text-neutral-900 dark:text-neutral-100" />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 outline-none text-neutral-900 dark:text-neutral-100" />
        </div>
        <button disabled={loading} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">
          {mode === 'login' ? <LogIn className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />} {loading ? 'Please wait…' : mode === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
        {mode === 'login' ? (
          <>Don’t have an account? <button className="text-indigo-600 dark:text-indigo-400 hover:underline" onClick={()=>setMode('signup')}>Sign up</button></>
        ) : (
          <>Already have an account? <button className="text-indigo-600 dark:text-indigo-400 hover:underline" onClick={()=>setMode('login')}>Log in</button></>
        )}
      </p>
    </motion.div>
  );
}
