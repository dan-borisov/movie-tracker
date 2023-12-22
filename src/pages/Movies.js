import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../config.js';
import movieGenresData from '../movieGenres.json'; 
import '../styles/MoviesList.css'



function Movies() {
  
  const [movies, setMovies] = useState([])
  const [selectedGenreId, setSelectedGenreId ] = useState()
 

    useEffect(() => {       
        const fetchMovies = async () => {
        
        try {
          
          let endpoint = '';
  
          if (selectedGenreId) {
            endpoint = `${TMDB_API_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${selectedGenreId}&include_adult=false`;
          } else {
            endpoint = `${TMDB_API_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&include_adult=false`;
          }
  
          const response = await fetch(endpoint);
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error('Error fetching data from TMDB', error);
        }
      };
      
      fetchMovies();

    }, [selectedGenreId]);
    
    const genreObject = movieGenresData.genres.find(genre => genre.id === selectedGenreId); 
  
  
    const handleGenreClick = (genreId) => {
        setSelectedGenreId(genreId);
    }

    function slugify(title) {
        return title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
    }

  
    
  return (
    <div>
      <div className="container-fluid hero-container">
            <img className="hero-image" src={process.env.PUBLIC_URL + '/movie-tracker-hero.jpg'} alt="Movier Tracker Hero" />
            <div className="hero-content">
              <h1>Explore Movies</h1>
            </div>
        </div>
        <div className="container buttons-container">
            {movieGenresData.genres.map((genre) => (
                <button className="btn btn-outline-warning m-2" key={genre.id} onClick={() => handleGenreClick(genre.id)}>
                    {genre.name}
                </button>
            ))}
          </div>
        <div className="container mt-3">
          <h2 className='mb-2'>{ genreObject ? 'Category: ' + genreObject.name : 'Popular'}</h2>
          <div className="row gy-4">
          { movies.map((movie) => {
            const posterPath = movie.poster_path
            ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
            : process.env.PUBLIC_URL + '/poster-placeholder.png';
            return (
            <div key={movie.id} className="col-6 col-md-4 col-lg-2">
              <Link to={`/movie/${movie.id}/${slugify(movie.title)}`}>
                <img className="movieCard img-fluid rounded" src={posterPath} alt={movie.title} />
              </Link>
            </div> )
             
            })}   
         </div>
        </div>
    </div>
  )
}

export default Movies;