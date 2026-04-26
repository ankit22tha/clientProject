// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ui/ProductCard';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/Categories';
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
      <section className="min-h-screen bg-gradient-to-br from-espresso-900 via-crimson-900 to-amber-900 flex items-center relative overflow-hidden grain">
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* MOBILE: Image pehle, Desktop: Right side */}
            <div className="flex justify-center order-first lg:order-last">
              <div className="relative w-64 sm:w-80 lg:w-full max-w-md">
                <img
                  src="dada.png"
                  alt="Deyal Masale"
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Text Side — Mobile: niche, Desktop: Left */}
            <div className="space-y-6 order-last lg:order-first text-center lg:text-left">

              <h1 style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 1000 }}
                className="text-4xl sm:text-5xl lg:text-6xl text-white leading-snug text-balance">
                हर खाने में भरपूर स्वाद<br />
                <span className="text-amber-400 text-bold">Deyal Masale</span>
              </h1>

              <p className="text-white/75 text-base sm:text-lg max-w-md mx-auto lg:mx-0"
                style={{ fontFamily: "'Baloo 2', sans-serif" }}>
                Handcrafted spices from India's finest farms. No shortcuts. Just pure, authentic flavour.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={() => setPage('products')}
                  className="px-3 py-1 bg-gradient-to-r from-crimson-700 to-amber-500 text-white font-bold rounded-full hover:scale-105 transition-all text-base sm:text-lg"
                  style={{ fontFamily: "'Baloo 2', sans-serif" }}
                >
                  More Products →
                </button>
              </div>

              {/* QR Code */}
              <div className="flex justify-center lg:justify-start pt-2">
                <img
                  src="qrCode.jpeg"
                  alt="QR Code"
                  className="w-36 h-32 sm:w-44 sm:h-40 border-4 border-white/30 rounded-2xl shadow-lg"
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

      {/* RECIPE VIDEOS + PHOTOS SECTION */}
<section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a0a 0%, #3d0c0c 50%, #1a0a0a 100%)' }}>

  {/* Flowing Wave Animation Background */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full opacity-20" style={{ animation: 'wave1 6s ease-in-out infinite' }}>
      <path fill="#dc2626" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320L1344,320L1248,320L1152,320L1056,320L960,320L864,320L768,320L672,320L576,320L480,320L384,320L288,320L192,320L96,320L48,320L0,320Z"/>
    </svg>
    <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full opacity-15" style={{ animation: 'wave2 8s ease-in-out infinite' }}>
      <path fill="#f59e0b" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320L1344,320L1248,320L1152,320L1056,320L960,320L864,320L768,320L672,320L576,320L480,320L384,320L288,320L192,320L96,320L48,320L0,320Z"/>
    </svg>
    <svg viewBox="0 0 1440 320" className="absolute top-0 w-full opacity-10" style={{ animation: 'wave3 10s ease-in-out infinite' }}>
      <path fill="#dc2626" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0L1344,0L1248,0L1152,0L1056,0L960,0L864,0L768,0L672,0L576,0L480,0L384,0L288,0L192,0L96,0L48,0L0,0Z"/>
    </svg>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">

    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-4xl sm:text-6xl font-black text-white mb-4" style={{ fontFamily: "'Baloo 2', sans-serif" }}>
        DEYAL RECIPE VIDEOS
      </h2>
      <p className="text-white/70 text-base sm:text-lg max-w-2xl" style={{ fontFamily: "'Baloo 2', sans-serif" }}>
        हमारे स्वादिष्ट मसालों से बनाये गए व्यंजन — देखिए और बनाइए घर पर!
      </p>
    </div>

    {/* Photos Strip — Auto Scroll */}
    <div className="overflow-hidden mb-12 rounded-2xl">
      <div className="flex gap-4" style={{ animation: 'scrollStrip 20s linear infinite', width: 'max-content' }}>
        {/* Apne photos ke naam yahan change karo */}
        {['dhaniya.png','chili.png','elachi.jpeg','masale 2.png','photo5.jpg','photo1.jpg','photo2.jpg','photo3.jpg','photo4.jpg','photo5.jpg'].map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-300" style={{ width: '280px', height: '200px' }}>
            <img
              src={img}
              alt={`Recipe ${i+1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>

    {/* YouTube Video */}
    <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/30 max-w-4xl mx-auto">
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          /* APNA YOUTUBE LINK YAHAN DAALO - src mai */
          src="youtube.com/watch?v=1K52lxXf2bs"
          title="Deyal Recipe Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

          

      </div>
    </div>

  </div>
</section>

      {/* CATEGORIES */}
      <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto text-white">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl">Explore Categories</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.key}
              onClick={() => setPage('products')}
              className="bg-white rounded-3xl p-8 text-center card-lift cursor-pointer hover:shadow-xl transition-all group"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={cat.icon}
                  alt={cat.label}
                  className="w-24 h-24 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-espresso-700 mb-3">{cat.label}</h3>
              <p className="text-espresso-500 text-sm mb-4">{cat.desc}</p>
              <p className="text-amber-600 font-medium">{cat.count} Products →</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 px-6 sm:px-10 bg-espresso-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>


      

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 sm:px-10 bg-ivory-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-espresso-700 mb-10">
            What Our Customers Say
          </h2>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg min-h-[200px]">
            <div className="text-5xl text-amber-400 mb-4">"</div>
            <p className="text-xl sm:text-2xl italic text-espresso-600 leading-relaxed">
              "{testimonials[activeTestimonial]}"
            </p>
            <div className="mt-8 text-amber-600 font-medium">— Happy Customer</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;