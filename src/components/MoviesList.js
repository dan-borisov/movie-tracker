import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../config.js';
import genresData from '../genres.json';



function MoviesList({ selectedGenre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        let endpoint = `${TMDB_API_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&include_adult=false`;

        if (selectedGenre) {
          endpoint = `${TMDB_API_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${selectedGenre}&include_adult=false`;
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
  
  function slugify(title) {
    return title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
  }

  return (
    <div>    
        <div className="container mt-3">
          <h2 className='mb-2'>{genreObject ? 'Category: ' + genreObject.name : 'Popular'}</h2>
          <div className="row gy-4">
          {movies.map((movie) => (
                <div key={movie.id} className="col-6 col-md-4 col-lg-2">
                  <Link to={`/movie/${movie.id}/${slugify(movie.title)}`}>
                    <img className="movieCard img-fluid rounded" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                  </Link>
                </div>     
           ))}   
         </div>
        </div>

    </div>
  )
}

export default MoviesList;