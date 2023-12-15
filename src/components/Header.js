import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import ARandomButton from './ARandomButton';
import { useLocation, Link } from 'react-router-dom';


function Header() {
  const [backgroundColor, setBackgroundColor] = useState();
  const [showRandomButton, setShowRandomButton] = useState(false);
  const location = useLocation();

  

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowRandomButton(true);
    }
    const handleScroll = () => {
        const isHomePage = location.pathname === '/';
        const isScrolledPast500 = window.scrollY > 500;
      

        if (isScrolledPast500) {
          setBackgroundColor('#060D17'); 
        } else {
          setBackgroundColor(''); 
        }

        setShowRandomButton((!isHomePage) || (isHomePage && isScrolledPast500));
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

    return (
      <nav class="navbar fixed-top navbar-light" style={{ backgroundColor, transition: 'background-color 0.4s ease' }}>
        <div class="container">
          <a class="navbar-brand" href="/">MovieTracker</a>
          <Link to={'/movies'}>
            <a href="/">Movies</a>
          </Link>
          <Link to='/tv-shows'>
            <a href="/">TV Shows</a>
          </Link>
          { showRandomButton && <ARandomButton /> }
        </div>
      </nav>
    );
}

export default Header;