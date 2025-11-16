import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/products`);
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="catalog" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Featured Products</h2>
            <p className="text-slate-600 text-sm">Curated tech for everyday life</p>
          </div>
        </div>

        {loading && <p className="text-slate-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-slate-200 hover:shadow-xl transition">
              <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                <img src={p.image_url} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="line-clamp-1 text-base font-semibold">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold">${'{'}p.price{'}'}</span>
                  <button className="rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-slate-800">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
