import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [country, setCountry] = useState('IN');
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-none flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=60&q=80" alt="ArtistryNest Logo" className="w-12 h-12 mb-2 rounded-full object-cover" />
        <h1 className="font-display text-2xl font-bold mb-2">ARTISTRYNEST</h1>
        <h2 className="font-body text-lg font-semibold mb-1">Login with OTP</h2>
        <p className="text-sm text-gray-600 mb-6">Enter your log in details</p>
        <form className="w-full flex flex-col gap-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <select value={country} onChange={e => setCountry(e.target.value)} className="bg-gray-100 px-2 py-3 text-sm outline-none">
              <option value="IN">🇮🇳 +91</option>
              <option value="US">🇺🇸 +1</option>
              <option value="UK">🇬🇧 +44</option>
            </select>
            <input
              type="tel"
              placeholder="Phone number"
              className="flex-1 px-3 py-3 outline-none text-base"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
            Request OTP
            <span className="ml-1">→</span>
          </button>
        </form>
        <div className="flex items-center w-full my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-4 text-gray-400 text-sm">Or Login Using</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="flex gap-4 w-full">
          <button className="flex-1 border rounded-lg py-3 flex items-center justify-center gap-2 text-gray-700 font-semibold">
            <span role="img" aria-label="whatsapp">🟢</span> WhatsApp
          </button>
          <button className="flex-1 border rounded-lg py-3 flex items-center justify-center gap-2 text-gray-700 font-semibold">
            <span role="img" aria-label="email">✉️</span> Email
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          I accept that I have read & understood <br />
          <a href="#" className="underline">Privacy Policy</a> and T&Cs.
        </p>
        <p className="text-sm text-gray-600 mt-4">
          New to ArtistryNest?{' '}
          <Link to="/signup" className="text-artistry-pink underline font-semibold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login; 