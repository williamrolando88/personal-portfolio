import React, { useDebugValue, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import { projects } from './modules/projects';
import { getRepo } from './store/repos/reposHelper';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    projects.forEach((project) => {
      dispatch(getRepo(project));
    });
  }, []);

  return (
    <div className="bg-slate-50">
      <NavBar />
      <main className="flex flex-col justify-center items-center">
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
