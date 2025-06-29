import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

function CartItem({ product, qty, onQtyChange, onRemove }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-artistry-dark rounded-xl shadow mb-4">
      <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
      <div className="flex-1">
        <div className="font-display text-lg font-bold text-artistry-pink mb-1">{product.name}</div>
        <div className="font-body text-artistry-dark dark:text-artistry-light">₹{product.price}</div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => onQtyChange(qty - 1)} disabled={qty <= 1} className="p-1 rounded-full bg-artistry-yellow disabled:opacity-50">
          <MinusIcon className="w-5 h-5" />
        </button>
        <span className="font-body font-semibold w-6 text-center">{qty}</span>
        <button onClick={() => onQtyChange(qty + 1)} className="p-1 rounded-full bg-artistry-yellow">
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>
      <button onClick={onRemove} className="ml-2 p-1 rounded-full bg-artistry-pink text-white hover:bg-artistry-yellow hover:text-artistry-dark transition">
        <TrashIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

export default CartItem; 