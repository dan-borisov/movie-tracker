import React from 'react';
import '../styles/Footer.css';
import ARandomButton from './ARandomButton';

function Footer() {
    return (
        <footer>
            <div class="container mt-5 py-5">
                <div class="row gy-5">
                    <div class="col-12 col-lg-4">
                        <h2 className='footer-heading'>MovieTracker</h2>
                        <p className='footer-slogan'>Explore your favourite movies and TV Shows</p>
                        <ARandomButton />
                    </div>
                    <div class="col-6 text-center col-lg-2">
                        <h4>Popular</h4>
                        <ul>
                            <li>
                                <a href="/">Action</a>
                            </li>
                            <li>
                                <a href="/">Drama</a>
                            </li>
                            <li>
                                <a href="/">Thriller</a>
                            </li>
                            <li>
                                <a href="/">Comedy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 text-center col-lg-2">
                        <h4>Social Media</h4>
                        <ul>
                            <li>
                                <a href="/">Twitter</a>
                            </li>
                            <li>
                                <a href="/">Facebook</a>
                            </li>
                            <li>
                                <a href="/">Instagram</a>
                            </li>
                            <li>
                                <a href="/">Pinterest</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 text-center col-lg-2">
                        <h4>Company</h4>
                        <ul>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">Contact Us</a>
                            </li>
                            <li>
                                <a href="/">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 text-center col-lg-2">
                        <h4>Legal</h4>
                        <ul>
                            <li>
                                <a href="/">Terms of Use</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mb-4 border-top border-secondary">
                <div className="row my-2">                  
                    <div className="col text-end">                        
                        <span className='tmdb-credit'>
                            Data Provided by
                        
                        <a href="https://www.themoviedb.org/">
                            <img className="tmdb-logo ms-2" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="TMDB logo" />
                        </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;