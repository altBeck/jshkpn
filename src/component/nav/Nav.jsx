import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav--link">
        <p><a className="lnk0" href="#">ABOUT</a></p>
        <p><a className="lnk0" href="#">BLOG</a></p>
        
        <div className="tooltip">
          <span className="tooltiptext"><a className="lnk0" href="#">GALLERY</a></span>
        </div>
      </div>
    </div>
  )
}

export default Nav