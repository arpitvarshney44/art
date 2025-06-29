import React from 'react';

const priceOptions = [
  { label: 'All', value: '' },
  { label: 'Under ₹500', value: '500' },
  { label: '₹500 - ₹1000', value: '1000' },
  { label: '₹1000 - ₹2000', value: '2000' },
];

function ProductFilter({ categories, selectedCategory, onCategoryChange, selectedPrice, onPriceChange }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
      <div>
        <label className="font-body font-semibold mr-2">Category:</label>
        <select
          value={selectedCategory}
          onChange={e => onCategoryChange(e.target.value)}
          className="rounded-full px-4 py-2 border border-artistry-pink focus:ring-2 focus:ring-artistry-pink"
        >
          <option value="">All</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="font-body font-semibold mr-2">Price:</label>
        <select
          value={selectedPrice}
          onChange={e => onPriceChange(e.target.value)}
          className="rounded-full px-4 py-2 border border-artistry-pink focus:ring-2 focus:ring-artistry-pink"
        >
          {priceOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;
