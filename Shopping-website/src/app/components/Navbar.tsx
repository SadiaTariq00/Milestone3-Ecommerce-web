


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-yellow-500 text-white py-5 flex justify-between items-center px-10 relative z-10">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-green-700">FASHION.ERA</h1>
      
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-white text-black rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-yellow-300"
          />
        </div>
      </div>

      <nav className="hidden md:flex gap-10 text-white font-bold">
        <Link href="/" onClick={closeMenu} className="hover:text-green-800 hover:underline">
          Home
        </Link>
        <Link href="#products" onClick={closeMenu} className="hover:text-green-800 hover:underline">
          Products
        </Link>
        <Link href="/about" onClick={closeMenu} className="hover:text-green-800 hover:underline">
          About
        </Link>
        <Link href="/contact" onClick={closeMenu} className="hover:text-green-800 hover:underline">
          Contact
        </Link>
        <Link href="/testimonal" onClick={closeMenu} className="hover:text-green-800 hover:underline">
          Testimonal
        </Link>
        <FaShoppingCart className="text-white text-xl " />
      </nav>

      <div className="md:hidden flex items-center">
        <HiMenuAlt3 className="text-white text-3xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-full bg-yellow-500 p-5 md:hidden z-20`}
      >
        <div className="flex justify-end">
          <HiX className="text-white text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className="flex flex-row items-center gap-3 text-white font-bold">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="#products" onClick={closeMenu}>
            Products
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/testimonal" onClick={closeMenu} className="hover:text-pink-950 hover:underline">
            Testimonal
          </Link>
          <FaShoppingCart className="text-white text-xl md:hidden" />
        </nav>
      </div>
    </header>
  );
}
