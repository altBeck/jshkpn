import React from 'react';
import './App.css';

import { Nav } from './component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, ABCD, Blog, IFoncier, Liqwid } from './pages';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="About" component={About} />
        <Route path="ABCD" component={ABCD} />
        <Route path="Blog" component={Blog} />
        <Route path="IFoncier" component={IFoncier} />
        <Route path="Liqwid" component={Liqwid} />
      </Routes>
    </Router>
  );
}

export default App;
