// src/pages/Media.jsx
import React from 'react';

const Media = () => {
  return (
    <div className="pt-20 min-h-screen bg-ivory-100">
      {/* Page Header */}
      <div className=" text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-6xl lg:text-7xl font-light">Media & Gallery</h1>
          <p className="mt-4 text-amber-100 text-xl">Our journey from farms to your kitchen</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Gallery Section */}
        <div className="mb-20">
          <h2 className="font-display text-4xl text-espresso-700 text-center mb-12">Our Spice Journey</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="group bg-white rounded-3xl overflow-hidden shadow-lg card-lift">
                <div className="h-80 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 flex items-center justify-center text-9xl transition-transform group-hover:scale-105">
                  {item % 3 === 0 ? '🌶️' : item % 2 === 0 ? '🟡' : '🍛'}
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-espresso-700">Spice Harvest 2025</h3>
                  <p className="text-espresso-500 text-sm mt-2">Kashmir • Rajasthan • Kerala</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-20">
          <h2 className="font-display text-4xl text-espresso-700 text-center mb-10">Watch Our Story</h2>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="aspect-video bg-espresso-900 rounded-2xl flex items-center justify-center text-white text-8xl mb-8">
            
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-medium text-espresso-700">From Farm to Table - The Deyal Story</h3>
              <p className="text-espresso-500 mt-3">Duration: 4:32 minutes</p>
            </div>
          </div>
        </div>

        {/* Press & Mentions */}
        <div>
          <h2 className="font-display text-4xl text-espresso-700 text-center mb-12">Featured In</h2>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 text-3xl text-espresso-400 font-light">
            <div>Times of India</div>
            <div>NDTV Good Times</div>
            <div>India Today</div>
            <div>Food & Wine Magazine</div>
            <div>The Hindu</div>
            <div>BBC Travel</div>
            <div>PTC NEWS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;