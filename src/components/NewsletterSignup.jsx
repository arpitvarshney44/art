import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-full px-4 py-2 font-body text-artistry-dark outline-none focus:ring-2 focus:ring-artistry-pink"
      />
      <button
        type="submit"
        className="rounded-full px-5 py-2 bg-artistry-pink text-white font-body font-semibold hover:bg-artistry-yellow hover:text-artistry-dark transition"
      >
        Subscribe
      </button>
      {submitted && (
        <span className="ml-2 text-artistry-yellow font-body">Thank you!</span>
      )}
    </form>
  );
}

export default NewsletterSignup; 