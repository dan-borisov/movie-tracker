import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../config';



function ARandomButton() {
    const [movie, setMovie ] = useState([]);
    const [randomButtonClicked, setRandomButtonClicked] = useState(true);
    
   useEffect(() => {
        const fetchRandomMovie = async () => {
            try {
                const randomPage = Math.floor(Math.random() * 500) + 1;
                const randomMovieIndex = Math.floor(Math.random() * 20);

                const endpoint = `${TMDB_API_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&page=${randomPage}&include_adult=false`;
                const response = await fetch(endpoint);
                const data = await response.json();
                setMovie(data.results[randomMovieIndex]);
                setRandomButtonClicked(false);
            } catch (error) {
                console.error('Error fetching from TMDB', (error));
            }
        }
        
        if (randomButtonClicked) {
            fetchRandomMovie();
        }
   }, [randomButtonClicked]);

   function slugify(title) {
    if(!title) {
        return '';
    }
    return title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
    }

    const handleClick = () => {
        setRandomButtonClicked(true);
    }

    return (
        <Link to={`/movie/${movie.id}/${slugify(movie.title)}`} >
            <button onClick={handleClick} className='btn btn-warning'>Random Movie</button>
        </Link>
    )
};

export default ARandomButton;