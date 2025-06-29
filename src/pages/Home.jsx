import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NewsletterSignup from '../components/NewsletterSignup';
import AnnouncementBar from '../components/AnnouncementBar';
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

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    import('../data/products.json').then((mod) => setProducts(mod.default));
  }, []);

  const bestsellers = products.filter((p) => p.bestseller).slice(0, 4);
  const featured = products.slice(0, 4);

  return (
    <div>
      <AnnouncementBar />
      {/* Category Carousel */}
      <CategoryCarousel categories={categories} />

      {/* Sale Banner */}
      <section className="w-full bg-red-800 text-white text-center py-6 mb-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
          <span className="font-display text-2xl md:text-3xl font-bold tracking-wider">THE WISE SALE</span>
          <span className="font-display text-xl md:text-2xl font-bold">|</span>
          <span className="font-display text-2xl md:text-3xl font-bold tracking-wider">LIMITED STOCK</span>
          <span className="font-display text-xl md:text-2xl font-bold">|</span>
          <span className="font-display text-2xl md:text-3xl font-bold tracking-wider">MIN. 50% OFF</span>
        </div>
      </section>

      {/* Editorial Hero */}
      <section className="relative w-full h-[350px] md:h-[420px] mb-8 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
          alt="Editorial Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        <div className="relative z-10 text-left max-w-3xl px-6">
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            DIGITAL NOMAD
          </motion.h1>
          <motion.p
            className="font-body text-xl md:text-2xl text-white/90 mb-4 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            The work-from-anywhere aesthetic
          </motion.p>
        </div>
      </section>

      {/* Bestsellers/Product Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="font-display text-3xl text-artistry-pink mb-6">Bestsellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bestsellers.map((p) => (
            <Link to={`/products/${p.id}`} key={p.id} className="group">
              <motion.div whileHover={{ scale: 1.04 }} className="bg-white dark:bg-artistry-dark rounded-2xl shadow-md overflow-hidden flex flex-col border border-artistry-light dark:border-artistry-dark hover:shadow-lg transition">
                <img src={p.image} alt={p.name} className="w-full h-40 object-cover object-center" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="font-display text-lg font-bold text-artistry-pink mb-1 truncate">{p.name}</h3>
                  <div className="font-body text-xl font-semibold text-artistry-dark dark:text-artistry-light mb-2">₹{p.price}</div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-2xl mx-auto py-12 px-4">
        <h2 className="font-display text-2xl text-artistry-pink mb-2 text-center">Stay Inspired!</h2>
        <p className="text-center text-artistry-dark/80 mb-4">Sign up for our newsletter to get the latest on new arrivals and offers.</p>
        <NewsletterSignup />
      </section>
    </div>
  );
}

export default Home; 