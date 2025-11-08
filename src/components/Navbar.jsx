import React, { useEffect, useState } from 'react';
import { ShoppingCart, User, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Admin', href: '#admin' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'system';
    setTheme(stored);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = theme === 'dark' || (theme === 'system' && systemDark);
    root.classList.toggle('dark', enableDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="text-indigo-600 dark:text-indigo-400">Jayvik</span>
          <span className="text-neutral-800 dark:text-neutral-100">Store</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search products"
              className="pl-9 pr-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-sm outline-none border border-transparent focus:border-indigo-500/40 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 w-64"
            />
          </div>
          <button
            aria-label="Theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <Sun className="h-5 w-5 hidden dark:block text-amber-300" />
            <Moon className="h-5 w-5 dark:hidden text-indigo-600" />
          </button>
          <button className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors" aria-label="Account">
            <User className="h-5 w-5" />
          </button>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-neutral-200 dark:border-neutral-800"
          >
            <div className="px-4 py-4 space-y-3 bg-white dark:bg-neutral-900">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search products"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-sm outline-none border border-transparent focus:border-indigo-500/40 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400"
                  />
                </div>
                <button
                  aria-label="Theme"
                  onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                  className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800"
                >
                  <Sun className="h-5 w-5 hidden dark:block text-amber-300" />
                  <Moon className="h-5 w-5 dark:hidden text-indigo-600" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800" aria-label="Cart">
                  <div className="flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Cart</span>
                  </div>
                </button>
                <button className="flex-1 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800" aria-label="Account">
                  <div className="flex items-center justify-center gap-2">
                    <User className="h-5 w-5" />
                    <span>Account</span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
