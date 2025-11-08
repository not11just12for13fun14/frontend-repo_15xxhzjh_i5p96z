import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import AuthPanel from './AuthPanel';
import { motion } from 'framer-motion';
import { LogOut, User } from 'lucide-react';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const supabaseConfigured = Boolean(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  useEffect(() => {
    let mounted = true;
    async function init() {
      try {
        if (!supabaseConfigured) return;
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (mounted) setUser(data?.session?.user ?? null);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    init();
    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, [supabaseConfigured]);

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <section id="profile" className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Your Profile</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Manage your account, downloads, payments, and saved snippets.</p>
        </div>

        {!supabaseConfigured && (
          <div className="mb-6 text-sm text-amber-600 dark:text-amber-400">Authentication is not configured yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable login/signup.</div>
        )}

        {!user ? (
          <AuthPanel onAuth={setUser} />
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Signed in as</p>
                  <p className="font-medium text-neutral-900 dark:text-white">{user.email}</p>
                </div>
              </div>
              <button onClick={handleLogout} className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-sm">
                <LogOut className="h-4 w-4" /> Sign out
              </button>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
                <h3 className="font-semibold text-neutral-900 dark:text-white">Downloads</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Your purchased or free resources will appear here.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
                <h3 className="font-semibold text-neutral-900 dark:text-white">Payments</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">View your payment history and invoices.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
                <h3 className="font-semibold text-neutral-900 dark:text-white">Saved Snippets</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Quickly access your favorite code snippets.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
                <h3 className="font-semibold text-neutral-900 dark:text-white">Account</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Email: {user.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
