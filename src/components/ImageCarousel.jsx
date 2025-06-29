import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-80 flex items-center justify-center bg-artistry-light rounded-xl overflow-hidden mb-4">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Product"
            className="object-contain h-80 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setIndex(i)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${i === index ? 'border-artistry-pink' : 'border-transparent'}`}
          >
            <img src={img} alt="thumb" className="object-cover w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
