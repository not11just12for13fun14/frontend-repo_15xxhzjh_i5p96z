import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Play } from 'lucide-react';

const starter = {
  html: `<!-- Jayvik Learn Hub Playground -->\n<div class="wrap">\n  <h1>Jayvik Learn Hub</h1>\n  <p>Build the future with Jayvik Labs.</p>\n  <button class="btn">Run the world</button>\n</div>`,
  css: `:root{color-scheme:light dark;}\n*{box-sizing:border-box} body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu; margin:0;padding:2rem;background:radial-gradient(1200px 600px at 10% -10%, rgba(99,102,241,.25), transparent 60%), radial-gradient(1000px 500px at 110% -10%, rgba(236,72,153,.2), transparent 60%);}\n.wrap{max-width:720px;margin:0 auto;padding:2rem;border-radius:1.25rem;background:rgba(255,255,255,.6);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.4)}\n@media (prefers-color-scheme: dark){.wrap{background:rgba(10,10,10,.6);border-color:rgba(255,255,255,.08)}}\nh1{margin:0 0 .5rem;font-size:2rem} .btn{padding:.75rem 1rem;border-radius:.75rem;border:1px solid rgba(0,0,0,.1);background:linear-gradient(135deg,#111,#000);color:white} .btn:hover{filter:brightness(1.15)}\n`,
  js: `document.querySelector('.btn')?.addEventListener('click', ()=>{\n  alert('Jayvik Labs: Future, Faster ⚡');\n});`,
  py: `# Python execution in browser requires a runtime like Pyodide.\n# This editor stores your code; execution can be added server-side later.\nprint('Hello from Jayvik Labs!')`,
};

export default function Editor() {
  const [tab, setTab] = useState('html');
  const [html, setHtml] = useState(starter.html);
  const [css, setCss] = useState(starter.css);
  const [js, setJs] = useState(starter.js);
  const [py, setPy] = useState(starter.py);
  const [runKey, setRunKey] = useState(0);

  const srcDoc = useMemo(() => {
    return `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
  }, [html, css, js, runKey]);

  return (
    <section id="editor" className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Jayvik Playground</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">A lightweight, student-friendly code editor for HTML, CSS, JS, and Python. Build interactive demos and share your ideas.</p>
          </div>
          <button onClick={() => setRunKey((k) => k + 1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">
            <Play className="h-4 w-4" /> Run Preview
          </button>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2 text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                {['html','css','js','py'].map((t) => (
                  <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 rounded-lg transition ${tab===t ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'}`}>
                    {t.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="hidden sm:flex items-center gap-1 text-xs text-neutral-500"><Code className="h-4 w-4" /> Live Editor</div>
            </div>
            <div className="p-3">
              {tab === 'html' && (
                <textarea value={html} onChange={(e) => setHtml(e.target.value)} spellCheck={false} className="w-full h-80 sm:h-96 font-mono text-sm rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 outline-none text-neutral-900 dark:text-neutral-100" />
              )}
              {tab === 'css' && (
                <textarea value={css} onChange={(e) => setCss(e.target.value)} spellCheck={false} className="w-full h-80 sm:h-96 font-mono text-sm rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 outline-none text-neutral-900 dark:text-neutral-100" />
              )}
              {tab === 'js' && (
                <textarea value={js} onChange={(e) => setJs(e.target.value)} spellCheck={false} className="w-full h-80 sm:h-96 font-mono text-sm rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 outline-none text-neutral-900 dark:text-neutral-100" />
              )}
              {tab === 'py' && (
                <textarea value={py} onChange={(e) => setPy(e.target.value)} spellCheck={false} className="w-full h-80 sm:h-96 font-mono text-sm rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 outline-none text-neutral-900 dark:text-neutral-100" />
              )}
              {tab === 'py' && (
                <p className="mt-2 text-xs text-neutral-500">Note: Python execution in-browser requires Pyodide or a backend runner. This playground saves your code and runs web previews for HTML/CSS/JS.</p>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="px-4 py-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-sm text-neutral-600 dark:text-neutral-300">Live Preview</span>
              <span className="text-xs text-neutral-500">HTML • CSS • JS</span>
            </div>
            <iframe title="preview" key={runKey} className="w-full h-[28rem] bg-white dark:bg-neutral-950" sandbox="allow-scripts allow-same-origin" srcDoc={srcDoc} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
