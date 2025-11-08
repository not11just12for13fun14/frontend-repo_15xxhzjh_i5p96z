import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">© {new Date().getFullYear()} Jayvik Store. All rights reserved.</p>
          </div>
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            ⚡ Powered by Jayvik Labs – Building the Future of Tech.
          </p>
        </div>
      </div>
    </footer>
  );
}
