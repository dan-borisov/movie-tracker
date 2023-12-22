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
    
    const handleMobileMenuToggle = () => {
      const mobileMenu = document.getElementById('navbarSupportedContent')
      if (mobileMenu && mobileMenu.classList.contains('show')) {
        setBackgroundColor('#060D17'); 
      } else {
        setBackgroundColor(''); 
      }

    }

    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('shown.bs.collapse', handleMobileMenuToggle);
    window.addEventListener('hidden.bs.collapse', handleMobileMenuToggle);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('show.bs.collapse', handleMobileMenuToggle);
      window.removeEventListener('hide.bs.collapse', handleMobileMenuToggle);
    }
  }, [location.pathname]);
  
    const handleNavLinkClick = () => {
      document.getElementById('navbarSupportedContent').classList.remove('show');
      setBackgroundColor('');
    }

    

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
                <Link to='/movies' onClick={handleNavLinkClick}>
                  <a href="/" className='header-link'>Movies</a>
                </Link>
              </li>
              <li class="nav-item p-3">
                <Link to='/tv-shows' onClick={handleNavLinkClick}>
                  <a href="/" className='header-link'>TV Shows</a>
                </Link>
              </li>
              <li class="nav-item p-3" onClick={handleNavLinkClick}>
              { showRandomButton && <ARandomButton /> }
              </li>
            </ul>
          </div>
        </div>
     </nav>     
    );
}

export default Header;