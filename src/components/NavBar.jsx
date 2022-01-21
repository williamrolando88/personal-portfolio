import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import { ImMenu } from 'react-icons/im';
import { FaEnvelope } from 'react-icons/fa';

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <header className="bg-stone-700 text-slate-50 text-xl w-full md:px-[10%] md:fixed md:top-0 md:left-0">
        <nav className="flex justify-between p-6 md:px-0 pl-4 w-full">
          <a className="md:text-2xl" href="#home">
            William Morales
          </a>
          <div className="md:hidden">
            <a
              className="cursor-pointer"
              onClick={() => setShowMobileMenu(true)}>
              <ImMenu />
            </a>
          </div>
          <div className="hidden md:flex gap-6 items-center text-lg">
            <a className="hover:text-orange-500" href="#projects">
              Portfolio
            </a>
            <a className="hover:text-orange-500" href="#about">
              About
            </a>
            <a className="hover:text-orange-500" href="#contact">
              Contact
            </a>
            <a
              className="hover:text-orange-500"
              href="mailto:william.rolando88@hotmail.com?subject=Want%20to%20contact"
              target="_blank">
              <FaEnvelope />
            </a>
          </div>
        </nav>
      </header>
      <MobileMenu
        show={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      />
    </div>
  );
};

export default NavBar;
