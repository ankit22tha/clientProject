// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ui/ProductCard';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { MARQUEE } from '../data/marquee';

const Home = ({ setPage, addToCart }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    "The quality of these spices is unmatched. My cooking has improved tremendously.",
    "Finally found real authentic Indian spices. The aroma is just like my grandmother used to make.",
    "Best garam masala I have ever used. Restaurant quality at home!"
  ];

  return (
    <div>
      {/* HERO */}
      {/* HERO SECTION - Final Adjusted */}
    <section className="min-h-screen bg-gradient-to-br from-espresso-900 via-crimson-900 to-amber-900 flex items-center relative overflow-hidden grain">
    <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-20 lg:gap-17 items-center pt-20">
    
    {/* LEFT - Text Side */}
    <div className="space-y-10 lg:pr-8">
      
      <h1 className="font-display text-6xl lg:text-7xl font-light text-white leading-none">
        हर खाने में भरपूर स्वाद<br />
        <span className="text-amber-400">Deyal Masale</span>
      </h1>

      <p className="text-ivory-100/80 text-lg max-w-md">
        Handcrafted spices from India's finest farms. No shortcuts. Just pure, authentic flavour.
      </p>

      <button 
        onClick={() => setPage('products')}
        className="px-10 py-4 bg-gradient-to-r from-crimson-700 to-amber-500 text-white font-semibold rounded-full hover:scale-105 transition-all text-lg"
      >
        More Products →
      </button>

      {/* QR Code - Text ke niche, thoda right shifted */}
      <div className="pt-6 pl-10">
        <p className="text-amber-300 text-sm mb-3">Scan to know more about us</p>
        <img 
          src="qrCode.jpeg"   // ← Yahan apni QR code image ka path daal do
          alt="QR Code" 
          className="w-36 h-36 border-4 border-white/30 rounded-2xl shadow-lg"
        />
      </div>
    </div>

    {/* RIGHT - Image Side (Chhota kiya) */}
    <div className="flex justify-center lg:justify-end">
      <div className="relative max-w-md lg:max-w-lg">
        <div className="rounded-3xl overflow-hidden">
          <img 
            src="dada.png" 
            alt="Deyal Masale" 
            className="w-47 h-49 object-cover rounded-6xl"
          />
        </div>
        
      </div>
    </div>

  </div>
</section>

      {/* MARQUEE */}
      <div className="bg-amber-500 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee text-espresso-900 font-medium text-sm">
          {MARQUEE.concat(MARQUEE).map((item, i) => (
            <span key={i} className="mx-8">{item} • </span>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-white">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl ">Explore Categories</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.key}
              onClick={() => setPage('products')}
              className="bg-white rounded-3xl p-10 text-center card-lift cursor-pointer hover:shadow-xl transition-all group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="font-display text-2xl text-espresso-700 mb-3">{cat.label}</h3>
              <p className="text-espresso-500 text-sm mb-6">{cat.desc}</p>
              <p className="text-amber-600 font-medium">{cat.count} Products →</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 px-6 bg-espresso-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl">Featured Products</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;