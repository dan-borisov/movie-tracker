import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../config.js';

function slugify(title) {
  return title.toLowerCase().replace(/[^a-zA-Z ]/g, '').replace(/\s+/g, '-');
}


function Similar({ id, type }) {
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          let endpoint = `${TMDB_API_BASE_URL}/${type}/${id}/similar?api_key=${TMDB_API_KEY}&include_adult=false`;
          const response = await fetch(endpoint);
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error('Error fetching data from TMDB', error);
        }
      };
  
      fetchMovies();
    }, [id, type]);
  
    return (
      <div>
        <div className="container mt-3">
          { movies.length > 0 && <h2 className='mb-2'>Similar Movies</h2>}
          
          <div className="row gy-4">
            {movies.map((movie) => {
              const posterPath = movie.poster_path
                ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                : process.env.PUBLIC_URL + '/poster-placeholder.png';
              
              const slug = (type === 'tv' ? movie.name : movie.title)
              const dynoType = (type === 'tv' ? 'tv-show' : 'movie')
              return (
                <div key={movie.id} className="col-6 col-md-4 col-lg-2">
                  <Link to={`/${dynoType}/${movie.id}/${slugify(slug)}`}>
                    <img className="movieCard img-fluid rounded" src={posterPath} alt={movie.title} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  export default Similar;
  