import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-100 to-zinc-400 group-hover:from-white group-hover:to-zinc-300 transition"></div>
          <span className="text-white tracking-[0.35em] text-sm font-medium">NESMERDI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-200">
          <a href="#collection" className="hover:text-white transition">Collection</a>
          <a href="#story" className="hover:text-white transition">Our Story</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;