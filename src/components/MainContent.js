import React, { useState, useEffect } from 'react';
import genresData from '../genres.json';
import '../styles/MainContent.css';



function MainContent({ onSelectGenre }) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        setGenres(genresData.genres);
    }, []);
    
    const handleGenreClick = (genreId) => {
        onSelectGenre(genreId);
    }

    return (
        <main>
            <div>
                <div className="container-fluid hero-container">
                    <img className="hero-image" src={process.env.PUBLIC_URL + '/movie-tracker-hero.jpg'} alt="Movier Tracker Hero" />
                    <div className="hero-content">
                        <h1>Welcome to MovieTracker</h1>
                        <p>Explore your favourite movies and TV Shows</p>
                        <div className="hero-buttons">
                            <button type="button" href="#" className="btn btn-warning m-3 btn-lg">Random Movie</button>
                            <button type="button" href="#" className="btn btn-outline-secondary m-3 btn-lg">Sigh Up</button>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                {genres.map((genre) => (
                    <button className="btn btn-outline-warning m-2" key={genre.id} onClick={() => handleGenreClick(genre.id)}>
                        {genre.name}
                    </button>
                ))}
                </div>
            </div>
        </main>
    );
}

export default MainContent;
