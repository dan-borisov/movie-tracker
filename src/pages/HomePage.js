import React, { useState, useEffect } from 'react';
import movieGenresData from '../movieGenres.json';
import MoviesList from '../components/MoviesList';
import ARandomButton from '../components/ARandomButton.js';


function HomePage() {
   
    



    return (
        <main>
            <div className="container-fluid hero-container">
                <img className="hero-image" src={process.env.PUBLIC_URL + '/movie-tracker-hero.jpg'} alt="Movier Tracker Hero" />
                <div className="hero-content">
                    <h1>Welcome to MovieTracker</h1>
                    <p>Explore your favourite movies and TV Shows</p>
                    <div className="hero-buttons">
                        <ARandomButton />
                    </div>
                </div>
            </div>

            <MoviesList />
        </main>
    );
}

export default HomePage;
