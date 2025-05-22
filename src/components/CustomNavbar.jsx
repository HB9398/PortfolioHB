import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../../public/assets';
import { navLinks } from '../constants';

const CustomNavbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkBg = scrolled; // Assuming dark background when scrolled

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-30 w-[96vw] max-w-5xl px-4 py-2 flex items-center justify-between rounded-full transition-all duration-300
        ${scrolled ? 'bg-white/40 backdrop-blur-lg shadow-xl border border-white/30' : 'bg-white/25 backdrop-blur-md shadow-md border border-white/10'}
      `}
      style={{
        boxShadow: scrolled
          ? '0 8px 32px 0 rgba(131, 90, 255, 0.15), 0 0 16px 2px rgba(131,90,255,0.10)'
          : '0 2px 8px 0 rgba(131, 90, 255, 0.08)',
        background: scrolled
          ? 'linear-gradient(90deg, rgba(0,255,200,0.10) 0%, rgba(255,255,255,0.30) 100%)'
          : 'linear-gradient(90deg, rgba(0,255,200,0.13) 0%, rgba(255,255,255,0.22) 100%)'
      }}
    >
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("Home");
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="logo" className="w-[48px] h-[48px] object-contain" />
        <p className="text-white text-[20px] font-extrabold cursor-pointer flex drop-shadow-lg tracking-wide">
          <span className="sm:block hidden"> Portfolio &nbsp; </span>
        </p>
      </Link>
      {/* Desktop Navbar */}
      <ul className="ml-10 list-none sm:flex sm:flex-row gap-2 hidden items-center">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`px-5 py-2 rounded-full transition font-semibold text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/60 whitespace-nowrap
              ${active === link.title ? 'bg-[#00ffc8] text-white shadow-lg' : 'text-white hover:bg-white/30 hover:text-white'}
              hover:scale-105 active:scale-95 duration-200 cursor-pointer`}
            onClick={() => setActive(link.title)}
            tabIndex={0}
            style={{ minWidth: 'max-content' }}
          >
            <Link to={link.id === "home" ? "/" : `/${link.id.toLowerCase()}`} className="block w-full h-full text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] text-white">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Menu Button */}
      <div className="px-3 relative sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {/* Mobile Dropdown Menu */}
      {toggle && (
        <div className="p-6 bg-[#151030]/80 backdrop-blur-lg absolute top-[72px] right-4 mt-5 min-w-[180px] z-10 rounded-2xl border border-white/20 shadow-xl">
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`px-3 py-2 rounded-full transition font-semibold text-[16px] focus:outline-none focus:ring-2 focus:ring-primary/60
                  ${active === link.title ? 'bg-primary text-white shadow-lg' : 'text-gray-200 hover:bg-white/10 hover:text-white'}
                  hover:scale-105 active:scale-95 duration-200 cursor-pointer`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
                tabIndex={0}
              >
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
