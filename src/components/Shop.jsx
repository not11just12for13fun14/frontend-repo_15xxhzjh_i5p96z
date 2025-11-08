import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const products = [
  {
    id: 'p1',
    name: 'Jayvik Card Pro',
    price: 199.0,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop',
    category: 'Fintech',
  },
  {
    id: 'p2',
    name: 'Neon Headphones',
    price: 149.0,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1634717037148-4dc76c09a328?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwSGVhZHBob25lc3xlbnwwfDB8fHwxNzYyNjE5NDMxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Audio',
  },
  {
    id: 'p3',
    name: 'Glassmorphic Keyboard',
    price: 129.0,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    category: 'Accessories',
  },
  {
    id: 'p4',
    name: 'Quantum Mouse',
    price: 89.0,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    category: 'Accessories',
  },
];

export default function Shop() {
  return (
    <section id="shop" className="relative py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Products</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Curated selection with premium build and futuristic aesthetics.</p>
          </div>
          <div className="flex items-center gap-3">
            <select className="px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm">
              <option>All Categories</option>
              <option>Fintech</option>
              <option>Audio</option>
              <option>Accessories</option>
            </select>
            <select className="px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm">
              <option>Sort: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <motion.a
              key={p.id}
              href={`#product-${p.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-xl hover:shadow-indigo-500/10 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{p.rating}</span>
                  </div>
                </div>
                <p className="mt-1 text-indigo-600 dark:text-indigo-400 font-semibold">${p.price.toFixed(2)}</p>
                <button className="mt-3 w-full px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 group-hover:bg-neutral-800 dark:group-hover:bg-neutral-100 transition-colors">Add to Cart</button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
