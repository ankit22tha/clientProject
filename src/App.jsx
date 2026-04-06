// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';//our story
import Products from './pages/Products';
import Media from './pages/Media';
import Contact from './pages/Contact';//contact
import Footer from './components/layout/Footer';

function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);   // ← Loader ke liye state
  const [showCart, setShowCart] =useState(false); //Cart ke liye 


  // Loader ko 1.5 second ke baad hide karna
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    const toast = document.createElement('div');
    toast.className = "fixed bottom-6 right-6 bg-espresso-900 text-white px-6 py-4 rounded-2xl shadow-2xl z-50";
    toast.innerHTML = `🛒 ${product.name} added to cart!`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (loading) {
    return (
      <div id="loader">
        <div className="loader-ring"></div>
        <div className="loader-brand">Deyal Food</div>
        <div className="loader-sub">हर खाने में भरपूर स्वाद</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-100">
      <Navbar 
        page={page} 
        setPage={setPage} 
        cartCount={cart.length}
        onCartClick={() => setShowCart(true)}
      />
      
          <div className="bg-gradient-to-br from-espresso-900 via-crimson-900 to-amber-900 pb-15 pt-15">

            <main>
              {page === 'home' && <Home setPage={setPage} addToCart={addToCart} />}
              {page === 'about' && <About setPage={setPage} addToCart={addToCart}/>}
              {page === 'products' && <Products setPage={setPage} addToCart={addToCart} />}
              {page === 'media' && <Media />}
              {page === 'contact' && <Contact/>}
            </main>
          </div>

      <Footer setPage={setPage} />

            {/* ================== REAL CART MODAL ================== */}
      {showCart && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="p-6 border-b flex justify-between items-center bg-espresso-900 text-white">
              <h2 className="text-2xl font-display">Your Cart ({cart.length})</h2>
              <button 
                onClick={() => setShowCart(false)}
                className="text-3xl hover:text-amber-400 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-6 overflow-y-auto max-h-[55vh]">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-6xl mb-4">🛒</p>
                  <p className="text-xl text-espresso-500">Your cart is empty</p>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="flex gap-4 py-5 border-b last:border-none">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">
                      {item.emoji}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-medium text-espresso-700 leading-tight">{item.name}</h4>
                      <p className="text-amber-600 font-bold mt-1">₹{item.price}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700 text-3xl leading-none"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Total & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center text-xl font-semibold mb-6">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-crimson-700 to-amber-500 text-white rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-all">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      

    </div>
  );
}

export default App;