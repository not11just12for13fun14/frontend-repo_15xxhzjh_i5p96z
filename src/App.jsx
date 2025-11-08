import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Editor from './components/Editor';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-indigo-500/20 selection:text-indigo-700 dark:selection:text-indigo-300">
      <Navbar />
      <main>
        <Hero />
        <Shop />
        <Editor />
        <About />
      </main>
      <Footer />
    </div>
  );
}
