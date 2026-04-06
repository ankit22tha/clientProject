// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className=" text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-6xl lg:text-7xl font-light">
            Rooted in Heritage,<br />
            Built for Today.
          </h1>
          <p className="mt-6 text-amber-100 text-xl max-w-2xl mx-auto">
            Four decades of passion, purity and an unwavering commitment to authentic flavours of India.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-5xl text-espresso-700 mb-8">
              From One Farm.<br />
              <span className="text-crimson-700">To a Million Tables.</span>
            </h2>
            <div className="space-y-6 text-espresso-600 leading-relaxed text-lg">
              <p>
                It began in 1978 in a small village outside Jodhpur. Ratan Sharma, a third-generation farmer, noticed that the spices in markets tasted nothing like what he grew on his farm.
              </p>
              <p>
                He decided to sell directly — no middlemen, no compromise. Today, Deyal Food is present in many states across India, yet our promise of purity remains unchanged.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl flex items-center justify-center text-8xl">🌾</div>
            <div className="aspect-square bg-gradient-to-br from-red-100 to-rose-100 rounded-3xl flex items-center justify-center text-8xl mt-12">🌶️</div>
            <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center text-8xl">🧄</div>
            <div className="aspect-square bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl flex items-center justify-center text-8xl mt-12">🟡</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-ivory-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-espresso-700">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center bg-white p-10 rounded-3xl shadow">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="text-2xl font-medium mb-4">Farm Transparency</h3>
              <p className="text-espresso-500">Every pack has a QR code that tells you exactly which farm it came from.</p>
            </div>
            <div className="text-center bg-white p-10 rounded-3xl shadow">
              <div className="text-5xl mb-6">🔬</div>
              <h3 className="text-2xl font-medium mb-4">Lab Tested</h3>
              <p className="text-espresso-500">Every batch is tested for purity, pesticides and heavy metals.</p>
            </div>
            <div className="text-center bg-white p-10 rounded-3xl shadow">
              <div className="text-5xl mb-6">🏺</div>
              <h3 className="text-2xl font-medium mb-4">Traditional Methods</h3>
              <p className="text-espresso-500">Stone grinding and sun-drying — the way our ancestors did it.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;