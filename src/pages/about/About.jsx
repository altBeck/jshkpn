import React from 'react';
import './about.css';

import hero from '../../assets/jsh.png';

const About = () => {
  return (
    <div className="about--container">
      <div className="space--about">
        <a className="home--link" href="/">HOME</a>
      
        <div className="space--about-content">

          <div className="hero">

            <img src={hero} alt="hero"/>

            <p>I believe they refer to folks like me as "catalysts".</p>

            <p className="content--para">
              I consider myself a passionate contributor to the growth and use of technology in Africa. I already have a lot of initiatives that I've contributed to; such as <a className="poa--link" href="">Proof of Africa</a> and <a className="liqwid--link" href="https://liqwid.finance">Liqwid Finance</a>, to name a couple. Here, I draw on my personal experiences to lower obstacles and make it simpler for everyone to participate in the technological revolution by providing access to practical resources along the route and collaborative partners.
            </p>


          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About