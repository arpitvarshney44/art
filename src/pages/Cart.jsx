import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    import('../data/products.json').then((mod) => setProducts(mod.default));
  }, []);

  const cartProducts = cart.map((item) => {
    const product = products.find((p) => String(p.id) === String(item.id));
    return product ? { ...product, qty: item.qty } : null;
  }).filter(Boolean);

  const total = cartProducts.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="font-display text-3xl text-artistry-pink mb-6">Your Cart</h1>
      {cartProducts.length === 0 ? (
        <div className="text-center py-20 text-artistry-dark/70">Your cart is empty.</div>
      ) : (
        <>
          {cartProducts.map((p) => (
            <CartItem
              key={p.id}
              product={p}
              qty={p.qty}
              onQtyChange={(qty) => updateQty(p.id, qty)}
              onRemove={() => removeFromCart(p.id)}
            />
          ))}
          <div className="flex justify-between items-center mt-8">
            <div className="font-body text-xl font-bold text-artistry-dark dark:text-artistry-light">
              Total: ₹{total}
            </div>
            <button
              className="px-8 py-3 rounded-full bg-artistry-pink text-white font-body font-semibold text-lg hover:bg-artistry-yellow hover:text-artistry-dark transition"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart; 