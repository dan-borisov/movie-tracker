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
          
     <nav class="navbar fixed-top navbar-expand-md" style={{ backgroundColor, transition: 'background-color 0.4s ease' }}>
          <div class="container">
          <a class="navbar-brand" href="/">MovieTracker</a>
            <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto align-items-center">
                <li class="nav-item p-3">
                  <Link to={'/movies'}>
                    <a href="/" className='header-link'>Movies</a>
                  </Link>
                </li>
                <li class="nav-item p-3">
                  <Link to='/tv-shows'>
                    <a href="/" className='header-link'>TV Shows</a>
                  </Link>
                </li>
                <li class="nav-item p-3">
                { showRandomButton && <ARandomButton /> }
                </li>
              </ul>
            </div>
          </div>
     </nav>
     
    );
}

export default Header;