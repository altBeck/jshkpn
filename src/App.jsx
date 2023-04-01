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
        <Route path="/about" component={About} />
        <Route path="/abcd" component={ABCD} />
        <Route path="/blog" component={Blog} />
        <Route path="/ifoncier" component={IFoncier} />
        <Route path="/liqwid" component={Liqwid} />
      </Routes>
    </Router>
  );
}

export default App;
