import React from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Art', path: '/products?category=art' },
  { name: 'Home Decor', path: '/products?category=home-decor' },
  { name: 'Gifts', path: '/products?category=gifts' },
  { name: 'Stationery', path: '/products?category=stationery' },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  // Determine which auth button to show
  let authButton = (
    <Link to="/login" className="flex items-center gap-1 px-3 py-1 rounded-full bg-artistry-yellow hover:bg-artistry-pink hover:text-white font-body font-semibold transition">
      <UserCircleIcon className="w-6 h-6" />
      <span className="hidden sm:inline">Login/Signup</span>
    </Link>
  );
  if (location.pathname === '/login') {
    authButton = (
      <Link to="/signup" className="flex items-center gap-1 px-3 py-1 rounded-full bg-artistry-yellow hover:bg-artistry-pink hover:text-white font-body font-semibold transition">
        <UserCircleIcon className="w-6 h-6" />
        <span className="hidden sm:inline">Signup</span>
      </Link>
    );
  } else if (location.pathname === '/signup') {
    authButton = (
      <Link to="/login" className="flex items-center gap-1 px-3 py-1 rounded-full bg-artistry-yellow hover:bg-artistry-pink hover:text-white font-body font-semibold transition">
        <UserCircleIcon className="w-6 h-6" />
        <span className="hidden sm:inline">Login</span>
      </Link>
    );
  }

  return (
    <header className="sticky top-0 z-40 bg-artistry-light dark:bg-artistry-dark shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=80&q=80" alt="ArtistryNest Logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-display text-2xl font-bold text-artistry-pink tracking-wider">ArtistryNest</span>
        </Link>
        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-body text-lg transition-colors duration-200 hover:text-artistry-pink ${isActive ? 'text-artistry-pink font-semibold' : 'text-artistry-dark dark:text-artistry-light'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        {/* Search bar */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white dark:bg-artistry-dark rounded-full shadow px-3 py-1 mx-4 w-64">
          <input
            type="text"
            placeholder="Search for art, decor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none flex-1 px-2 text-artistry-dark dark:text-artistry-light font-body"
          />
          <button type="submit" className="text-artistry-pink font-bold px-2">Go</button>
        </form>
        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative group">
            <ShoppingCartIcon className="w-7 h-7 text-artistry-dark dark:text-artistry-light group-hover:text-artistry-pink transition" />
            {/* Cart count badge (dummy) */}
            <span className="absolute -top-2 -right-2 bg-artistry-pink text-white text-xs rounded-full px-1.5 py-0.5 font-bold">2</span>
          </Link>
          {authButton}
        </div>
      </div>
      {/* Mobile nav */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <form onSubmit={handleSearch} className="flex items-center bg-white dark:bg-artistry-dark rounded-full shadow px-3 py-1 w-full">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none flex-1 px-2 text-artistry-dark dark:text-artistry-light font-body"
          />
          <button type="submit" className="text-artistry-pink font-bold px-2">Go</button>
        </form>
      </div>
      <nav className="md:hidden flex justify-around bg-artistry-light dark:bg-artistry-dark py-2 border-t">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `font-body text-base transition-colors duration-200 hover:text-artistry-pink ${isActive ? 'text-artistry-pink font-semibold' : 'text-artistry-dark dark:text-artistry-light'}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header; 