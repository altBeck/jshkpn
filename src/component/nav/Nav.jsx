import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav--link">
        <div>
          <Link to="/about">ABOUT</Link>
        </div>

        <div>
          <Link to="/blog">BLOG</Link>
        </div>

        <div className="tooltip">
          <span className="tooltiptext"><a className="lnk0" href="#">GALLERY</a></span>
        </div>
      </div>
    </div>
  )
}

export default Nav