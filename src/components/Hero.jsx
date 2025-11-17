function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_35%)]"/>
      <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"/>
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-zinc-300 tracking-[0.35em] text-xs mb-6">LUXURY MENSWEAR UNDERWEAR</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
            Comfort reimagined. Confidence refined.
          </h1>
          <p className="mt-6 text-zinc-300/90 max-w-xl">
            NESMERDI crafts elevated essentials from premium fibers and tailored cuts—where effortless comfort meets enduring style.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#collection" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-100 transition">Shop Collection</a>
            <a href="#story" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">Learn More</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900/40 backdrop-blur border border-white/10">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1935&auto=format&fit=crop" alt="NESMERDI premium fabric"/>
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900/40 backdrop-blur border border-white/10 mt-10">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2070&auto=format&fit=crop" alt="Tailored fit"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;