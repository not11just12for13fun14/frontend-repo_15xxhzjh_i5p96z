import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 text-xs font-medium ring-1 ring-indigo-600/20 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Powered by Jayvik Labs
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">About Jayvik Labs</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Jayvik Labs is an innovation studio focused on empowering students and creators. We build premium learning tools, fintech-inspired interfaces, and immersive experiences that make education delightful and accessible.
            </p>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Jayvik Learn Hub blends modern design with performance-first engineering—so you can browse courses, explore books, and code in one elegant place.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#shop" className="px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">Explore Library</a>
              <a href="#editor" className="px-5 py-3 rounded-xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 text-neutral-900 dark:text-white hover:bg-white/80 dark:hover:bg-neutral-900/80 transition">Open Playground</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-3xl p-8 bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 flex items-center justify-center">
              <Rocket className="h-14 w-14 text-indigo-600 dark:text-indigo-400" />
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900">Premium, minimalist design</li>
              <li className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900">Student-first learning journey</li>
              <li className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900">Frictionless payments</li>
              <li className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900">Built-in coding playground</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
