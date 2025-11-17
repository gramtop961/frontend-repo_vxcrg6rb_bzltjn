import { useEffect, useState } from "react";

function ProductCard({ p }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/10 hover:border-white/20 transition">
      <div className="aspect-square bg-gradient-to-b from-zinc-800 to-zinc-900 flex items-center justify-center">
        <span className="text-zinc-500 text-sm">{p.category.toUpperCase()}</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-medium">{p.title}</h4>
          <span className="text-white/90">${p.price.toFixed(2)}</span>
        </div>
        <p className="text-zinc-400 text-sm mt-1 line-clamp-2">{p.description}</p>
        <div className="mt-3 text-xs text-zinc-400">
          <span>Sizes: {p.sizes.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || window.location.origin.replace("3000", "8000");
        const res = await fetch(`${base}/api/products`);
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="collection" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-white text-2xl">Featured Collection</h2>
          <a href="#" className="text-sm text-zinc-300 hover:text-white">View all</a>
        </div>
        {loading ? (
          <div className="text-zinc-400">Loading products…</div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.length === 0 ? (
              <div className="col-span-full text-zinc-400">
                No products found. Try seeding from the API tester.
              </div>
            ) : (
              products.map((p) => <ProductCard key={p.title} p={p} />)
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductGrid;