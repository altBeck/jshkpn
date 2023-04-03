import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav--link">
        <p><a>
          <Link to="/About">ABOUT</Link>
        </a></p>
        <p><a>
          <Link to="/Blog">BLOG</Link>
        </a></p>
        
        <div className="tooltip">
          <span className="tooltiptext"><a className="lnk0" href="#">GALLERY</a></span>
        </div>
      </div>
    </div>
  )
}

export default Nav