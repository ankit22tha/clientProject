// src/pages/Products.jsx
import React, { useState } from 'react';
import ProductCard from '../components/ui/ProductCard';
import { PRODUCTS } from '../data/products';

const Products = ({ setPage, addToCart }) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sort, setSort] = useState('popular');

  // Filter aur Sort logic
  const filteredProducts = PRODUCTS
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      return b.reviews - a.reviews; // popular by default
    });

  return (
    <div className="pt-20 min-h-screen">
      {/* Page Header */}
      <div className="text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-6xl font-light">Our Collection</h1>
          <p className="mt-4 text-amber-100 text-lg">Pure spices, direct from farms</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search spices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl border border-espresso-200 focus:border-amber-500 outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {['all', 'whole', 'powder', 'blend'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all ${
                  activeFilter === filter 
                    ? 'bg-crimson-700 text-white' 
                    : 'bg-white border border-espresso-200 hover:border-amber-500'
                }`}
              >
                {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-5 py-3 rounded-2xl border border-espresso-200 bg-white outline-none"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Results Count */}
        <p className="text-espresso-500 mb-8">
          Showing <span className="font-semibold text-espresso-700">{filteredProducts.length}</span> products
        </p>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-3xl">😕</p>
            <p className="text-xl text-espresso-500 mt-4">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;