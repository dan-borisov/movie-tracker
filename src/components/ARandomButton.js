import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../config';

function ARandomButton() {
    const [movie, setMovie ] = useState([]);
    
   useEffect(() => {
        const fetchRandomMovie = async () => {
            try {
                const randomPage = Math.floor(Math.random() * 500) + 1;
                const randomMovieIndex = Math.floor(Math.random() * 20);

                const endpoint = `${TMDB_API_BASE_URL}/trending/all/day?api_key=${TMDB_API_KEY}&page=${randomPage}`;
                const response = await fetch(endpoint);
                const data = await response.json();
                setMovie(data.results[randomMovieIndex]);
            } catch (error) {
                console.error('Error fetching from TMDB', (error));
            }
        }
        fetchRandomMovie();
   }, []);


    return (
        <Link to={`/movie/${movie.id}/${movie.title}`} >
            <button className='btn btn-lg btn-warning'>Random Movie</button>
        </Link>
    )
};

export default ARandomButton;