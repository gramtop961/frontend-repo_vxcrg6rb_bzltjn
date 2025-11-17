import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductGrid from './components/ProductGrid'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ProductGrid />
        <Features />
        <footer id="contact" className="border-t border-white/10 bg-black py-10">
          <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="tracking-[0.35em] text-xs text-zinc-400">NESMERDI</span>
            <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} NESMERDI. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App