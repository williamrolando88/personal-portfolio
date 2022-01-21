import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className="bg-slate-50">
      <NavBar />
      <main className="flex flex-col justify-center items-center">
        <Home />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
