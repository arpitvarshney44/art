import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

function SearchResults() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [search, setSearch] = useState(searchParams.get('q') || '');

  useEffect(() => {
    import('../data/products.json').then((mod) => setProducts(mod.default));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: search });
  };

  const q = searchParams.get('q')?.toLowerCase() || '';
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <form onSubmit={handleSearch} className="mb-8 flex justify-center">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for art, decor..."
          className="rounded-full px-6 py-2 w-full max-w-lg font-body border border-artistry-pink focus:ring-2 focus:ring-artistry-pink"
        />
        <button type="submit" className="ml-2 px-6 py-2 rounded-full bg-artistry-pink text-white font-body font-semibold hover:bg-artistry-yellow hover:text-artistry-dark transition">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-20 text-artistry-dark/70">No products found.</div>
      )}
    </div>
  );
}

export default SearchResults; 