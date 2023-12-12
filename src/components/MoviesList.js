import React, { useState, useEffect } from 'react';
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../config.js';
import genresData from '../genres.json';

function MoviesList({ selectedGenre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

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
  
  const genreObject = genresData.genres.find(genre => genre.id === selectedGenre);
  
  return (
    <div>
      <h2>{genreObject ? genreObject.name : 'Popular'}</h2>
        <div className="container">
          <div className="row gy-4">
          {movies.map((movie) => (
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="#">
                    <img className="movieCard img-fluid rounded" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  </a>
                </div>
       
           ))}   

          </div>
        </div>

    </div>
  )
}

export default MoviesList;