import React, { useState, useEffect } from 'react';
import genresData from '../genres.json';
import '../styles/MainContent.css';
import MoviesList from '../components/MoviesList';
import ARandomButton from '../components/ARandomButton.js';


function HomePage() {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, onSelectGenre] = useState(null);

    useEffect(() => {
        setGenres(genresData.genres);
    }, []);
    
    const handleGenreClick = (genreId) => {
        onSelectGenre(genreId);
    }

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
            <div className="container mt-3">
            {genres.map((genre) => (
                <button className="btn btn-outline-warning m-2" key={genre.id} onClick={() => handleGenreClick(genre.id)}>
                    {genre.name}
                </button>
            ))}
            </div>
            <MoviesList selectedGenre={selectedGenre} />
        </main>
    );
}

export default HomePage;
