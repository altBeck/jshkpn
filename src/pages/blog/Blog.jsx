import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <div className="liqwid--container">
      <div className="space--liqwid">
        <a className="home--link" href="/">HOME</a>

        <div className="space--liqwid-content">
          <p className="blog">I draw on my personal experiences, musing of my mind and I write about them in my substack Blog. </p>

          <button className="jsh-button"><a href="https://substack.com/profile/30965646-grey?utm_source=substack_profile" target="_blank">GO TO MY <span className="poa--link">BLOG</span></a></button>
        </div>

      </div>
    
    </div>
  )
}

export default Blog