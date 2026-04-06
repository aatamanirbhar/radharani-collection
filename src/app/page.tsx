import React from 'react';

const products = [
  { id: 1, name: 'Summer Linen Set', price: '₹2,499', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'Jaipur Block Print', price: '₹1,899', img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'Cotton Breeze Kurta', price: '₹2,100', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop' },
];

export default function Home() {
  return (
    <div className="bg-white text-stone-900 min-h-screen selection:bg-stone-100">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-stone-50">
        <h1 className="text-xl tracking-[0.4em] font-light uppercase">Radharani</h1>
        <div className="text-[10px] tracking-widest uppercase">Summer '26</div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <header className="mb-16">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4">The Collection</h2>
            <p className="text-sm text-stone-500 max-w-md leading-relaxed">Minimalist silhouettes inspired by the spirit of Jaipur. Designed for the heat, crafted for the soul.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {products.map((p) => (
              <div key={p.id} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-stone-50 mb-6">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase font-medium">{p.name}</h3>
                    <p className="text-sm text-stone-400 mt-1">{p.price}</p>
                  </div>
                  <button 
                    onClick={() => window.open(`https://wa.me/YOUR_NUMBER?text=Inquiry: ${p.name}`)}
                    className="text-[10px] tracking-widest uppercase border-b border-stone-900 pb-1 hover:text-stone-400 hover:border-stone-400 transition"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-stone-50">
        <p className="text-[9px] tracking-[0.5em] uppercase text-stone-300">Jaipur • Radharani Collection</p>
      </footer>
    </div>
  );
}