export default function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
} 