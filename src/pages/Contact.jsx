// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className=" text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-6xl lg:text-7xl font-light">Let's Talk</h1>
          <p className="mt-4 text-amber-100 text-xl">We're always happy to hear from you</p>
        </div>
      </div>

      

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h2 className="font-display text-4xl text-white mb-8">Come Find Us</h2>
          
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl">📍</div>
              <div>
                <h4 className="font-medium text-white">Our Office</h4>
                <p className="text-white">Village Lathwan, P.O. Ladraur,Tehsil Bhoranj, Distt Hamirpur, Bhoranj, Hamirpur, <br />Himachal Pradesh - 176043,India</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl">📞</div>
              <div>
                <h4 className="font-medium text-white">Call Us</h4>
                <p className="text-white">+91 94595-6140 , 96254-52835</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl">✉️</div>
              <div>
                <h4 className="font-medium text-white">Email</h4>
                <p className="text-white">deyalfoodproduts@gmail.com</p>
              </div>
            </div>
            {/* Social Media Icons - Logo ke niche */}
            <div className="flex gap-10">
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
                <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
              </a>
            </div>
          
          </div>
        </div>


        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-10 shadow-xl">
          {!formSent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input type="text" className="w-full px-5 py-3 border border-espresso-200 rounded-2xl" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full px-5 py-3 border border-espresso-200 rounded-2xl" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-3 border border-espresso-200 rounded-2xl" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows="6" className="w-full px-5 py-3 border border-espresso-200 rounded-2xl resize-y" required></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-crimson-700 to-amber-500 text-white font-semibold rounded-2xl hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-3xl text-green-600 mb-4">Thank You!</h3>
              <p className="text-espresso-600">We'll get back to you within 24 hours.</p>
            </div>
          )}
        </div>
      </div>

      {/* Google Map Placeholder */}
      <div className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-96 flex items-center justify-center relative">
          <div className="text-center">
            <div className="text-8xl mb-4">📍</div>
            <p className="text-2xl text-espresso-700">Khari Baoli, New Delhi</p>
            <p className="text-espresso-500 mt-2">Our Store Location</p>
          </div>
          {/* Real map ke liye baad mein Google Maps embed kar sakte hain */}
        </div>
      </div>
    </div>
  );
};

export default Contact;