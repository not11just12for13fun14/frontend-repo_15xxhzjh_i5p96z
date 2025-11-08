import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Cpu } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Rocket,
      title: 'Innovation-First',
      desc: 'We prototype rapidly and ship boldly to push consumer tech forward.',
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      desc: 'Privacy, security, and reliability are core to our product DNA.',
    },
    {
      icon: Cpu,
      title: 'Future-Facing',
      desc: 'From 3D experiences to AI, we craft premium, scalable systems.',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">About Jayvik Labs</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Jayvik Labs is an innovative tech company crafting delightful products at the edge of design and engineering.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
