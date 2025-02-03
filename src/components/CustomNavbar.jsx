import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../../public/assets';
import { navLinks } from '../constants';

const CustomNavbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-1 fixed top-0 z-20 bg-none pb-[100px]">
      <div className="w-auto flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-[100px] h-[100px] object-contain" />
          <p className="text-white text-[17px] font-bold cursor-pointer flex">
            <span className="sm:block hidden"> Haren Bhatia &nbsp; </span>
          </p>
        </Link>

        {/* Desktop Navbar */}
        <ul className={`md:ml-80 list-none sm:flex sm:flex-row gap-10 hidden`}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[14px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {/* Adjusting for the new route */}
              <Link to={link.id === "home" ? "/" : `/${link.id.toLowerCase()}`} >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>


        {/* Mobile Menu Button */}
        <div className="px-3 relative" style={{ marginTop: '6px' }}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[18px] h-[18px] object-contain cursor-pointer sm:hidden"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {toggle && (
        <div className="p-6 black-gradient absolute top-[72px] right-4 mt-5 min-w-[140px] z-10 rounded-xl">
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
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
