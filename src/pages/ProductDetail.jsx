import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import { useCart } from '../context/CartContext';
import { StarIcon } from '@heroicons/react/24/solid';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    import('../data/products.json').then((mod) => {
      const found = mod.default.find((p) => String(p.id) === String(id));
      setProduct(found);
    });
  }, [id]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  // For demo, use the same image 3x
  const images = [product.image, product.image, product.image];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="grid md:grid-cols-2 gap-10">
        <ImageCarousel images={images} />
        <div>
          <h1 className="font-display text-3xl text-artistry-pink mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="font-body text-lg">{product.rating}</span>
          </div>
          <div className="font-body text-2xl font-bold text-artistry-dark dark:text-artistry-light mb-4">₹{product.price}</div>
          <p className="mb-6 text-artistry-dark/80 dark:text-artistry-light/80">{product.description}</p>
          <button
            onClick={() => addToCart(product.id)}
            className="px-8 py-3 rounded-full bg-artistry-yellow hover:bg-artistry-pink hover:text-white font-body font-semibold text-lg transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 