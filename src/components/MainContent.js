import React, { useState, useEffect } from 'react';
import genresData from '../genres.json';


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
                {genres.map((genre) => (
                    <button key={genre.id} onClick={() => handleGenreClick(genre.id)}>
                        {genre.name}
                    </button>
                ))}
            </div>
        </main>
    );
}

export default MainContent;
