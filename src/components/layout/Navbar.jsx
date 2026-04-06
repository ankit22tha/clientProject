// src/components/layout/Navbar.jsx
import logo from '../../assets/images/DEYAL MAIN lOGO PNG.png'
import React, { useState, useEffect } from 'react';

const Navbar = ({ page, setPage, cartCount, onCartClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'Our Story' },
    { key: 'products', label: 'Products' },
    { key: 'media', label: 'Media' },
    { key: 'contact', label: 'Contact' },
  ];

  const goToPage = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-espresso-900/95 shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => goToPage('home')}
            className="flex items-center gap-3 group"
          >
            
            <div>
              <img src={logo} alt="Deyal Food Logo" className='w-40 h-30  object-cover'/>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-white">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => goToPage(link.key)}
                className={`font-medium transition-colors ${page === link.key ? 'text-amber-400' : 'hover:text-amber-400'}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="flex items-center gap-6">
            <button 
              onClick={onCartClick || (() => alert(`Cart mein ${cartCount} items hain`))}
              className="relative text-2xl text-white hover:text-amber-400 transition-colors"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-espresso-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl text-white"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-espresso-900 z-40 pt-24 px-8 md:hidden">
          <div className="flex flex-col gap-6 text-white text-3xl font-light">
            {navLinks.map((link) => (
              <button 
                key={link.key}
                onClick={() => goToPage(link.key)}
                className="text-left py-4 border-b border-white/10 hover:text-amber-400"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;