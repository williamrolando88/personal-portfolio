import React from 'react';
import {
  FaAngellist,
  FaGithub,
  FaLinkedin,
  FaMediumM,
  FaTwitter,
} from 'react-icons/fa';

const Home = () => (
  <div id="home" className="h-screen w-full bg-stone-900 text-slate-50">
    <div
      className="
    bg-[url('./src/assets/background/bg-home-mobile.svg')]
    md:bg-[url('./src/assets/background/bg-home-desktop.svg')] bg-no-repeat h-full bg-right-bottom md:bg-right">
      <div className="flex flex-col md:flex-row md:items-center md:justify-start justify-center h-full px-6 md:p-0 gap-4">
        <div className="flex flex-col md:w-1/5 lg:w-1/2 md:order-1">
          <h1 className="text-orange-500 text-5xl font-serif">
            Hi There!
            <br />
            I'm William
          </h1>
          <h2 className="text-2xl">I'm a Software Developer</h2>
          <p>
            I can help you build a product, feature or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don't hesitate to contact me.
          </p>
        </div>
        <div className="flex gap-3 text-2xl md:text-3xl md:flex-col md:w-[10%] items-center">
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
      </div>
    </div>
  </div>
);

export default Home;
