// src/components/layout/Footer.jsx
import React from 'react';
const Footer = ({ setPage }) => {
  return (
    <footer className="bg-espresso-900 text-ivory-100/70 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo + Slogan + Social Icons */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="DEYAL MAIN lOGO PNG.png"
                alt="Deyal Food Logo" 
                className="w-40 h-auto object-contain" 
              />
            </div>
            
            <p className="text-sm leading-relaxed mb-6">
              दयाल मसाले हर खाने में भरपूर स्वाद......
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/deyalfood" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="instagram.png" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://www.facebook.com/share/1GiVSRWnKL/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="facebook.png" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://youtube.com/@deyalfoodproducts" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="youtube.png" alt="YouTube" className="w-8 h-8" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="twitter.png" alt="Twitter" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <button onClick={() => setPage('home')} className="block hover:text-amber-400">Home</button>
              <button onClick={() => setPage('about')} className="block hover:text-amber-400">Our Story</button>
              <button onClick={() => setPage('products')} className="block hover:text-amber-400">Products</button>
              <button onClick={() => setPage('media')} className="block hover:text-amber-400">Media</button>
              <button onClick={() => setPage('contact')} className="block hover:text-amber-400">Contact</button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-cinzel text-white mb-4">Products</h4>
            <div className="space-y-2 text-sm">
              <button onClick={() => setPage('products')} className="block hover:text-amber-400">Whole Spices</button>
              <button onClick={() => setPage('products')} className="block hover:text-amber-400">Powder Spices</button>
              <button onClick={() => setPage('products')} className="block hover:text-amber-400">Signature Blends</button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-white mb-4">Contact</h4>
            <div className="text-sm space-y-1">
              <div>Village Lathwan, P.O. Ladraur,Tehsil Bhoranj, Distt Hamirpur, Bhoranj, Hamirpur, Himachal Pradesh-176043, India</div>
              <div>+91 94595-6140, 96254-52835</div>
              <div>deyalfoodproducts@gmail.com</div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs">
          © 2026 Deyal Food Products. ❤️ All rights reserved by Developer Ankit Thakur.
        </div>
      </div>
    </footer>
  );
};

export default Footer;