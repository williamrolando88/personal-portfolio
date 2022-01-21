import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MobileMenu = (props) => {
  const { show, onClose } = props;
  const showMenu = (show) => {
    const classes =
      'w-screen h-screen bg-stone-700 text-slate-50 fixed top-0 left-0 flex-col z-10 md:hidden';
    return show ? classes + ' flex' : classes + ' hidden';
  };

  return (
    <div className={showMenu(show)}>
      <a className="cursor-pointer self-end m-6 text-xl" onClick={onClose}>
        <FaTimes />
      </a>
      <div className="flex flex-col items-center text-xl p-6">
        <a
          onClick={onClose}
          href="#projects"
          className="border-b-2 border-t-2 py-6 w-full text-center cursor-pointer">
          Projects
        </a>
        <a
          onClick={onClose}
          href="#about"
          className="border-b-2 py-6 w-full text-center cursor-pointer">
          About
        </a>
        <a
          onClick={onClose}
          href="#contact"
          className="border-b-2 py-6 w-full text-center cursor-pointer">
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
