import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 text-center">
      <motion.img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80"
        alt="404 Not Found"
        className="mb-8 mx-auto rounded-full object-cover"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h1 className="font-display text-4xl text-artistry-pink mb-4">Oops! Page Not Found</h1>
      <p className="font-body text-lg text-artistry-dark/80 mb-8">Looks like you wandered off the art trail.</p>
      <Link
        to="/"
        className="px-8 py-3 rounded-full bg-artistry-pink text-white font-body font-semibold text-lg hover:bg-artistry-yellow hover:text-artistry-dark transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFound; 