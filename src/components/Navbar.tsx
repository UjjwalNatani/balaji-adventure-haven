
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold">
            <span className={isScrolled ? "text-forest" : "text-white"}>
              Shri Balaji
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" isScrolled={isScrolled} />
            <NavLink to="/about" label="About" isScrolled={isScrolled} />
            <NavLink to="/gallery" label="Gallery" isScrolled={isScrolled} />
            <NavLink to="/activities" label="Activities" isScrolled={isScrolled} />
            <NavLink to="/contact" label="Contact" isScrolled={isScrolled} />
            <NavLink to="/terms" label="Terms" isScrolled={isScrolled} />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <span className={isScrolled ? "text-dark" : "text-white"}>
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white shadow-lg rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-3 px-4 pt-2">
              <MobileNavLink to="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink to="/about" label="About" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink to="/gallery" label="Gallery" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink to="/activities" label="Activities" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink to="/contact" label="Contact" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink to="/terms" label="Terms" onClick={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, label, isScrolled }: { to: string; label: string; isScrolled: boolean }) => {
  return (
    <Link
      to={to}
      className={`${
        isScrolled ? "text-dark hover:text-forest" : "text-white hover:text-sand"
      } font-medium transition-colors duration-300`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => {
  return (
    <Link
      to={to}
      className="text-dark hover:text-forest font-medium py-2 transition-colors duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;
