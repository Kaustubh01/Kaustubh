"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Home", href: "hero" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between w-full top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold">MyLogo</div>

      {/* Desktop Links */}
      <div className="hidden lg:flex space-x-6">
        {navItems.map((item, i) => (
          <motion.a
            key={item.name}
            href={`#${item.href}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className={`${
              activeSection === item.href
                ? "text-[#26b990] font-semibold"
                : "hover:text-gray-400"
            }`}
          >
            {item.name}
          </motion.a>
        ))}
      </div>

      {/* Hamburger Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-6 lg:hidden overflow-hidden z-50"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={`#${item.href}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${
                  activeSection === item.href
                    ? "text-[#26b990] font-semibold"
                    : "hover:text-gray-400"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
