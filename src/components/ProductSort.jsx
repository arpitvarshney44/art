import React from 'react';

const sortOptions = [
  { label: 'Popularity', value: 'popularity' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

function ProductSort({ selectedSort, onSortChange }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <label className="font-body font-semibold">Sort by:</label>
      <select
        value={selectedSort}
        onChange={e => onSortChange(e.target.value)}
        className="rounded-full px-4 py-2 border border-artistry-pink focus:ring-2 focus:ring-artistry-pink"
      >
        {sortOptions.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

export default ProductSort; 
 