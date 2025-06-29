import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={`rounded-full p-2 bg-artistry-yellow shadow-lg hover:bg-artistry-pink transition-colors ${className}`}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6 text-artistry-dark" />
      ) : (
        <MoonIcon className="w-6 h-6 text-artistry-dark" />
      )}
    </button>
  );
}

export default ThemeToggle; 