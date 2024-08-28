import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">RoboImage</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-6 items-center`}
        >
          <a
            href="#"
            className="text-white hover:bg-white hover:text-indigo-500 px-3 py-2 rounded-md"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-white hover:bg-white hover:text-indigo-500 px-3 py-2 rounded-md"
          >
            Features
          </a>
          <a
            href="#gallery"
            className="text-white hover:bg-white hover:text-indigo-500 px-3 py-2 rounded-md"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-white hover:bg-white hover:text-indigo-500 px-3 py-2 rounded-md"
          >
            Contact
          </a>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
