// src/components/ui/ProductCard.jsx
import React from 'react';
import Stars from './Stars';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg card-lift hover:shadow-2xl transition-all group">
      {/* Image Area */}
      <div className={`h-56 bg-gradient-to-br ${product.color || 'from-amber-100 to-orange-100'} flex items-center justify-center relative overflow-hidden`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-40 h-40 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
        />
        
        {product.badge && (
          <span className="absolute top-4 left-4 px-4 py-1 bg-crimson-700 text-white text-xs font-semibold rounded-full">
            {product.badge}
          </span>
        )}
        
        {product.badge && (
          <span className="absolute top-4 left-4 px-4 py-1 bg-crimson-700 text-white text-xs font-semibold rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-amber-600 text-xs font-medium tracking-widest mb-1">
          {product.category?.toUpperCase() || 'SPICE'}
        </p>
        
        <h3 className="font-display text-xl font-medium text-espresso-700 mb-3 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-espresso-700">₹{product.price}</span>
            {product.old && (
              <span className="text-sm text-gray-400 line-through ml-2">₹{product.old}</span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-crimson-700 to-amber-500 text-white text-sm font-semibold rounded-full hover:scale-105 transition-all"
          >
            + Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;