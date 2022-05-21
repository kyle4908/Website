import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className='dark:text-white'>
            <Navbar />
            <Home />
          </div>
        } />
        <Route path="/About" element={
          <div className='dark:text-white'>
            <Navbar />
            <About />
          </div>
        } />
        <Route path="/Skills" element={
          <div className='dark:text-white'>
            <Navbar />
            <Skills />
          </div>
        } />
        <Route path="/Projects" element={
          <div className='dark:text-white'>
            <Navbar />
            <Projects />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
