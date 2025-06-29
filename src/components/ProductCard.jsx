import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, PlusIcon } from '@heroicons/react/24/solid';

function ProductCard({ product, onAddToCart }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-white dark:bg-artistry-dark rounded-2xl shadow-md overflow-hidden flex flex-col transition border border-artistry-light dark:border-artistry-dark hover:shadow-lg relative"
    >
      {product.badge && (
        <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">{product.badge}</span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover object-center"
        loading="lazy"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-lg font-bold text-artistry-pink mb-1 truncate">{product.name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-artistry-dark dark:text-artistry-light">{product.rating}</span>
          </div>
          <div className="font-body text-xl font-semibold text-artistry-dark dark:text-artistry-light mb-2">
            ₹{product.price}
          </div>
        </div>
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-artistry-yellow hover:bg-artistry-pink hover:text-white font-body font-semibold transition"
        >
          <PlusIcon className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard; 