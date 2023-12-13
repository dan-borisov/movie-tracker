import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SimilarMovies from './SimilarMovies';
import { TMDB_API_BASE_URL, TMDB_API_KEY, TMDB_API_IMAGE_URL } from '../config';
import '../styles/SingleMovie.css';


function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [ageRating, setAgeRating] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const endpoint = `${TMDB_API_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`;
        const response = await fetch(endpoint);
        const data = await response.json();
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    const fetchAgeRating = async () => {
      try {
        const endpoint = `${TMDB_API_BASE_URL}/movie/${id}/release_dates?api_key=${TMDB_API_KEY}`;
        const response = await fetch(endpoint);
        const data = await response.json();
        const releaseDates = data.results.find(item => item.iso_3166_1 === "US");
        const age = releaseDates ? releaseDates.release_dates[0].certification : 'Unknown';
        const ageRating = age ? age : 'Unknown';
        
        setAgeRating(ageRating);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchAgeRating();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  if (!ageRating) {
    return <p>Loading...</p>;
  }

  const posterPath = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : process.env.PUBLIC_URL + '/poster-placeholder.png';

  return (
    <div>
        <div className="container-flex backdrop-container">
            <img className='movie-backdrop' src={TMDB_API_IMAGE_URL + movie.backdrop_path} alt={movie.title} />
        </div>
        <div className="movie-box p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-none d-md-block">
                        <img className="img-fluid rounded" src={posterPath} alt={movie.title} />
                    </div>
                    <div className="col-md-8">
                        <h1>{movie.title}</h1>
                        <p className="movie-year"> ({movie.release_date ? movie.release_date.slice(0, 4) : 'Unknown'})</p>
                        {movie.genres.map((genreObj) => (
                            <span key={genreObj.name} className='badge bg-warning text-dark mx-2'>
                                {genreObj.name}
                            </span>
                        ))}
                        <div className="container-fluid px-0">
                            <div className="row justify-content-center align-items-center mx-0 my-3">
                                <div className="col-lg-4 gy-2">
                                    <span className='details-span'>Runtime: </span>
                                    <span>{movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min` : 'Unknown'}</span>
                                </div>
                                <div className="col-lg-4 gy-2">
                                    <span className='details-span'>Age Rating: </span>
                                    <span>{ageRating}</span>
                                </div>
                                <div className="col-lg-4 gy-2">
                                    <span>
                                        <img src={process.env.PUBLIC_URL + '/imdb-logo.png'} alt="imdb logo" className='imdb-logo'/>
                                    </span>
                                    <span style={{ verticalAlign: 'middle' }}> { movie.vote_average ? (Math.round(movie.vote_average * 10) /10).toFixed(1) : 'Unknown'}</span>
                                </div>
                            </div>
                        </div>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
          <SimilarMovies movieId={id}/>                  
        </div>
    </div>
  );
}

export default SingleMovie;