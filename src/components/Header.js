import React, { useState, useEffect } from 'react';
import '../styles/Header.css';


function Header() {
  const [backgroundColor, setBackgroundColor] = useState();

  useEffect(() => {
    const handleScroll = () => {
      
        if (window.scrollY > 500) {
          setBackgroundColor('#060D17');
        } else {
          setBackgroundColor('');
        }
      
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
    return (
      <nav class="navbar fixed-top navbar-light" style={{ backgroundColor, transition: 'background-color 0.4s ease' }}>
        <div class="container">
          <a class="navbar-brand" href="/">MovieTracker</a>
        </div>
      </nav>
    );
}

export default Header;