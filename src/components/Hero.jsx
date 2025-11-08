import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-md bg-white/40 dark:bg-neutral-900/40 p-8 rounded-3xl border border-white/30 dark:border-white/10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 text-xs font-medium ring-1 ring-indigo-600/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Jayvik Labs — Building the Future of Tech
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Premium, Futuristic Commerce Experience
            </h1>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg max-w-xl">
              Jayvik Store blends minimalist design with cutting-edge fintech 3D aesthetics. Explore products with immersive visuals, smooth interactions, and lightning-fast checkout.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#shop" className="px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
                Shop Now
              </a>
              <a href="#about" className="px-5 py-3 rounded-xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 text-neutral-900 dark:text-white hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-colors">
                About Jayvik Labs
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pl-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20" />
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">Fintech-grade UI components</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/20 dark:from-neutral-950 dark:to-transparent" />
    </section>
  );
}
