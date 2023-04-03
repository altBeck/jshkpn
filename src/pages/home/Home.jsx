import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="conteneur-principal">
      <div className="recepient">
        <h1 className="nom">JSHKPN</h1>

        <div className="switch-list">
          <span className="span">...</span>
          <span className="span"><a>
            <Link to="/Liqwid">LIQWID</Link>
          </a></span>
          <span className="span"><a>
            <Link to="/ABCD">ABCD</Link>
          </a></span>
          <span className="span"><a>
            <Link to="/IFoncier">iFONCIER</Link>
          </a></span>
        </div>
      </div>
    </div>
  )
}

export default Home