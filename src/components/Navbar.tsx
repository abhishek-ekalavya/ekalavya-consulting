import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Crosshair, Menu, X } from 'lucide-react';
import { EC_SHIELD_LOGO } from '../assets/logo';

interface NavbarProps {
  onLockTarget: () => void;
}

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Team', path: '/team' },
  { label: 'Services', path: '/services' },
  { label: 'Casestudies', path: '/case-studies' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact Us', path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onLockTarget }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleLockTarget = () => {
    setMobileMenuOpen(false);
    onLockTarget();
  };

  return (
    <header id="navbar" className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0A1931]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={handleMobileNavClick}
          aria-label="Ekalavya Consulting"
          className="flex items-center transition-opacity hover:opacity-95"
        >
          <img 
            src={EC_SHIELD_LOGO} 
            alt="Ekalavya Consulting" 
            className="h-9 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Menu (6 Links on right side of logo) + LOCK THE TARGET CTA */}
        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          <nav className="flex items-center gap-1 font-mono text-xs font-semibold tracking-wider">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded transition-colors ${
                    isActive 
                      ? 'text-[#00D084] bg-white/5 font-bold' 
                      : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* LOCK THE TARGET CTA Button */}
          <button
            id="nav-lock-target-btn"
            onClick={handleLockTarget}
            className="group relative flex items-center gap-2 overflow-hidden rounded bg-[#00D084] px-4 py-2.5 font-mono text-xs font-bold tracking-wider text-black shadow-lg shadow-[#00D084]/20 transition-all duration-200 hover:bg-[#00ba76] hover:shadow-[#00D084]/40 active:translate-y-0.5 sm:px-5 sm:text-sm"
          >
            <Crosshair className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            <span>LOCK THE TARGET</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            id="mobile-lock-target-compact-btn"
            onClick={handleLockTarget}
            className="rounded bg-[#00D084] px-3 py-1.5 font-mono text-[11px] font-bold text-black shadow-sm sm:px-4 sm:py-2"
          >
            LOCK TARGET
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded border border-white/15 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu" 
          className="border-b border-white/10 bg-[#0A1931] px-4 py-6 shadow-2xl backdrop-blur-xl lg:hidden sm:px-6"
        >
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleMobileNavClick}
                  className={`flex items-center justify-between rounded px-4 py-3 font-mono text-sm tracking-wider transition-colors ${
                    isActive
                      ? 'border border-[#00D084]/40 bg-[#00D084]/10 font-bold text-[#00D084]'
                      : 'border border-transparent text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Crosshair className="h-4 w-4 text-[#00D084]" />}
                </Link>
              );
            })}
          </nav>

          {/* Full LOCK THE TARGET button in mobile drawer */}
          <div className="mt-5 border-t border-white/10 pt-5">
            <button
              onClick={handleLockTarget}
              className="flex w-full items-center justify-center gap-2 rounded bg-[#00D084] py-3.5 font-mono text-sm font-bold tracking-wider text-black shadow-lg shadow-[#00D084]/20 transition-all hover:bg-[#00ba76]"
            >
              <Crosshair className="h-4 w-4" />
              <span>LOCK THE TARGET</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
