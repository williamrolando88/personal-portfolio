import React from 'react';
import {
  FaAngellist,
  FaGithub,
  FaLinkedin,
  FaMediumM,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center py-6 border-t-2">
      <div className="flex gap-3 text-2xl md:text-3xl text-zinc-600">
        <a
          href="https://github.com/williamrolando88"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 cursor-pointer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/william-morales-palma/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 cursor-pointer">
          <FaLinkedin />
        </a>
        <a
          href="https://angel.co/william-morales-palma"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 cursor-pointer">
          <FaAngellist />
        </a>
        <a
          href="https://twitter.com/WillyMorales93"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 cursor-pointer">
          <FaTwitter />
        </a>
        <a
          href="https://medium.com/@william.rolando88"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 cursor-pointer">
          <FaMediumM />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
