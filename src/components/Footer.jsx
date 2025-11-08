import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">© {new Date().getFullYear()} Jayvik Learn Hub</p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">⚡ Powered by Jayvik Labs – Inspiring the Next Generation of Coders.</p>
      </div>
    </footer>
  );
}
