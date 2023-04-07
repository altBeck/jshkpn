import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="conteneur-principal">
      <div className="recepient">
        <h1 className="nom">JSHKPN</h1>

        <div className="switch-list">
          <span className="span">...</span>
          <span className="span">
            <Link to="/Liqwid">LIQWID</Link>
          </span>
          <span className="span">
            <Link to="/ABCD">ABCD</Link>
          </span>
          <span className="span">
            <Link to="/IFoncier">iFONCIER</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home