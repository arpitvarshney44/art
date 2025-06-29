import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [country, setCountry] = useState('IN');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-none flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=60&q=80" alt="ArtistryNest Logo" className="w-12 h-12 mb-2 rounded-full object-cover" />
        <h1 className="font-display text-2xl font-bold mb-2">ARTISTRYNEST</h1>
        <h2 className="font-body text-lg font-semibold mb-1">Sign Up</h2>
        <p className="text-sm text-gray-600 mb-6">Create your account</p>
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
          <input
            type="email"
            placeholder="Email address"
            className="border rounded-lg px-3 py-3 outline-none text-base"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg px-3 py-3 outline-none text-base"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
            Sign Up
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-6 text-center">
          I accept that I have read & understood <br />
          <a href="#" className="underline">Privacy Policy</a> and T&Cs.
        </p>
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-artistry-pink underline font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup; 