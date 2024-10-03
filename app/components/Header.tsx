'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  // Close menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Add this new function for smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Adjust this value to account for your fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full py-8 px-[8%] bg-white flex justify-between items-center z-10 border-b border-black/10">
      <Link href="/" className="text-3xl text-black font-extrabold cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
        Eva <span className="text-[#ff8615]">Portfolio</span>
      </Link>

      {/* Hamburger menu icon */}
      <div
        className="lg:hidden z-50 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
      </div>

      {/* Mobile menu */}
      <nav className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <ul className="flex flex-col pt-20">
          {['home', 'about', 'services', 'projects', 'skills', 'contact'].map((item) => (
            <li key={item} className="mb-4">
              <a
                href={`#${item}`}
                className={`text-lg font-medium px-8 py-2 block transition-all duration-300 ease-in-out ${activeSection === item ? 'text-[#ff8615] border-l-4 border-[#ff8615]' : 'text-black hover:text-[#ff8615]'}`}
                onClick={(e) => handleSmoothScroll(e, item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop menu */}
      <nav className="hidden lg:block">
        <ul className="flex">
          {['home', 'about', 'services', 'projects', 'skills', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`text-lg font-medium ml-16 transition-all duration-300 ease-in-out border-b-2 ${activeSection === item ? 'text-[#ff8615] border-[#ff8615]' : 'text-black border-transparent hover:text-[#ff8615] hover:border-[#ff8615]'}`}
                onClick={(e) => handleSmoothScroll(e, item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
