function Features() {
  const items = [
    {
      title: "SilkTouch Modal",
      desc: "Featherlight, breathable, and unbelievably soft against the skin.",
    },
    {
      title: "Sculpted Support",
      desc: "Engineered contouring for day-long comfort without compromise.",
    },
    {
      title: "Tailored Finish",
      desc: "Minimal seams, premium waistbands, and a refined silhouette.",
    },
  ];

  return (
    <section id="story" className="bg-black py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((f) => (
            <div key={f.title} className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10">
              <h3 className="text-white text-lg font-medium">{f.title}</h3>
              <p className="text-zinc-400 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;