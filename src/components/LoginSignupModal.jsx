import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LoginSignupModal({ open, onClose }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-artistry-dark rounded-2xl shadow-xl p-8 w-full max-w-xs mx-4 relative flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-artistry-pink hover:text-artistry-yellow text-xl font-bold"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
          <h2 className="font-display text-2xl mb-4 text-artistry-pink">
            {mode === 'login' ? 'Welcome Back!' : 'Join ArtistryNest'}
          </h2>
          <form className="flex flex-col gap-3 w-full">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="rounded-full px-4 py-2 font-body text-artistry-dark outline-none focus:ring-2 focus:ring-artistry-pink"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="rounded-full px-4 py-2 font-body text-artistry-dark outline-none focus:ring-2 focus:ring-artistry-pink"
              required
            />
            <button
              type="submit"
              className="rounded-full px-5 py-2 bg-artistry-pink text-white font-body font-semibold hover:bg-artistry-yellow hover:text-artistry-dark transition"
            >
              {mode === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <div className="mt-4 text-sm text-artistry-dark dark:text-artistry-light">
            {mode === 'login' ? (
              <>
                New here?{' '}
                <button className="text-artistry-pink underline" onClick={() => setMode('signup')}>
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button className="text-artistry-pink underline" onClick={() => setMode('login')}>
                  Login
                </button>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default LoginSignupModal; 