import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../config.js';
import movieGenresData from '../movieGenres.json';
import tvshowGenresData from '../tvshowGenres.json';
import '../styles/MoviesList.css'



function MoviesList() {
  const [videos, setVideos] = useState([])
  const [genresList, setGenresList ] = useState([])
  const [selectedGenreId, setSelectedGenreId ] = useState([])
  const isMovies = useLocation().pathname.includes('/movies')

  

    useEffect(() => {
      setSelectedGenreId(null)

      setGenresList(isMovies ? movieGenresData.genres : tvshowGenresData.genres)   
    }, [isMovies]);
   
    useEffect(() => {
      const type = isMovies ? 'movie' : 'tv'

      const fetchVideos = async () => {
        
        try {
          let endpoint = `${TMDB_API_BASE_URL}/${type}/popular?api_key=${TMDB_API_KEY}&include_adult=false`;
  
          if (selectedGenreId) {
            endpoint = `${TMDB_API_BASE_URL}/discover/${type}?api_key=${TMDB_API_KEY}&with_genres=${selectedGenreId}&include_adult=false`;
          }
  
          const response = await fetch(endpoint);
          const data = await response.json();
          setVideos(data.results);
        } catch (error) {
          console.error('Error fetching data from TMDB', error);
        }
      };
  
      fetchVideos();
    }, [selectedGenreId, isMovies]);
    
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
              {isMovies ? <h1>Movies</h1> : <h1>TV Shows</h1>}
            </div>
        </div>
        <div className="container buttons-container">
            {genresList.map((genre) => (
                <button className="btn btn-outline-warning m-2" key={genre.id} onClick={() => handleGenreClick(genre.id)}>
                    {genre.name}
                </button>
            ))}
          </div>
        <div className="container mt-3">
          <h2 className='mb-2'>{genreObject ? 'Category: ' + genreObject.name : 'Popular'}</h2>
          <div className="row gy-4">
          { isMovies ? (

          videos.map((video) => (
            <div key={video.id} className="col-6 col-md-4 col-lg-2">
              <Link to={`/movie/${video.id}/${video.title}`}>
                <img className="movieCard img-fluid rounded" src={`https://image.tmdb.org/t/p/w342${video.poster_path}`} alt={video.title} />
              </Link>
            </div> 
          ))    
          ) : (
            videos.map((video) => (
              <div key={video.id} className="col-6 col-md-4 col-lg-2">
                <Link to={`/tv/${video.id}/${video.original_name}`}>
                  <img className="movieCard img-fluid rounded" src={`https://image.tmdb.org/t/p/w342${video.poster_path}`} alt={video.original_name} />
                </Link>
              </div>    
          ))  
           )}   
         </div>
        </div>
    </div>
  )
}

export default MoviesList;