import React, { useState, useEffect } from 'react';
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../config.js';

function MoviesList({ selectedGenre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log('Selected Genre:', selectedGenre);
    const fetchMovies = async () => {
      try {
        let endpoint = `${TMDB_API_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`;

        if (selectedGenre) {
          endpoint = `${TMDB_API_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${selectedGenre}`;
        }

        const response = await fetch(endpoint);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data from TMDB', error);
      }
    };

    fetchMovies();
  }, [selectedGenre]);
  console.log('Movies:', movies);
  return (
    <div>
      <h2>MoviesList</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesList;