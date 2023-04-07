import React from 'react';
import './App.css';

import { Nav } from './component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, POA, Blog, IFoncier, Liqwid } from './pages';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/poa" element={<POA />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ifoncier" element={<IFoncier />} />
        <Route path="/liqwid" element={<Liqwid />} />
      </Routes>
    </Router>
  );
}

export default App

