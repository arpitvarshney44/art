import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import ProductSort from '../components/ProductSort';
import Pagination from '../components/Pagination';
import { useCart } from '../context/CartContext';
import CategoryCarousel from '../components/CategoryCarousel';

const categories = [
  { name: 'Sale', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80' },
  { name: 'Gifts', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80' },
  { name: 'Furnishings', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=200&q=80' },
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80' },
  { name: 'Furniture', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=200&q=80' },
  { name: 'Decor', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80' },
  { name: 'Candles', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80' },
  { name: 'Bags', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80' },
  { name: 'Watches', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=200&q=80' },
];

const SaleBanner = () => (
  <section className="w-full bg-red-800 text-white text-center py-6 mb-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
      <span className="font-display text-2xl md:text-3xl font-bold tracking-wider">THE WISE SALE</span>
      <span className="font-display text-xl md:text-2xl font-bold">|</span>
      <span className="font-display text-2xl md:text-3xl font-bold tracking-wider">LIMITED STOCK</span>
      <span className="font-display text-xl md:text-2xl font-bold">|</span>
      <span className="font-display text-2xl md:text-3xl font-bold tracking-wider">MIN. 50% OFF</span>
    </div>
  </section>
);

const PAGE_SIZE = 8;

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [sort, setSort] = useState('popularity');
  const [page, setPage] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    import('../data/products.json').then((mod) => setProducts(mod.default));
  }, []);

  // Filter
  let filtered = products;
  if (category) filtered = filtered.filter((p) => p.category === category);
  if (price) {
    if (price === '500') filtered = filtered.filter((p) => p.price < 500);
    else if (price === '1000') filtered = filtered.filter((p) => p.price >= 500 && p.price <= 1000);
    else if (price === '2000') filtered = filtered.filter((p) => p.price > 1000 && p.price <= 2000);
  }
  // Sort
  if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  else filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  // Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Categories for filter
  const filterCategories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="bg-white min-h-screen">
      <CategoryCarousel categories={categories} />
      <SaleBanner />
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="font-display text-3xl text-artistry-pink mb-6">Shop All Products</h1>
        <ProductFilter
          categories={filterCategories}
          selectedCategory={category}
          onCategoryChange={setCategory}
          selectedPrice={price}
          onPriceChange={setPrice}
        />
        <ProductSort selectedSort={sort} onSortChange={setSort} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {paginated.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}

export default ProductListing; 