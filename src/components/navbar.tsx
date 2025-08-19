"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library (lucide-react works great with Next.js)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">MyLogo</div>

      {/* Desktop Links */}
      <div className="hidden lg:flex space-x-6">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">About</a>
        <a href="#" className="hover:text-gray-400">Services</a>
        <a href="#" className="hover:text-gray-400">Contact</a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-6 lg:hidden">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
}
