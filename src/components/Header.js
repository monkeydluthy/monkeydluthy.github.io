import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter hover:text-blue-600 transition-colors"
          >
            Digital Dynamic Solution
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none z-50"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="font-medium hover:text-blue-600 transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`${
            isOpen ? 'fixed' : 'hidden'
          } md:hidden inset-0 bg-white z-40 h-screen w-screen top-0 left-0 flex flex-col items-center justify-center`}
          style={{ marginTop: '0' }}
        >
          <div className="flex flex-col items-center space-y-8">
            <Link
              to="/services"
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-xl px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
