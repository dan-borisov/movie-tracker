import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Similar from '../components/Similar';
import { TMDB_API_BASE_URL, TMDB_API_KEY, TMDB_API_IMAGE_URL } from '../config';
import '../styles/SingleMovie.css';


function SingleMovie() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [ageRating, setAgeRating] = useState(null);


  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMovieDetails = async () => {
      try {
        const endpoint = `${TMDB_API_BASE_URL}/tv/${id}?api_key=${TMDB_API_KEY}&include_adult=false`;
        const response = await fetch(endpoint);
        const data = await response.json();
        setShow(data);
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
        const endpoint = `${TMDB_API_BASE_URL}/tv/${id}/content_ratings?api_key=${TMDB_API_KEY}`;
        const response = await fetch(endpoint);
        const data = await response.json();
        const rating = data.results.find(item => item.iso_3166_1 === "US");
        const age = rating ? rating.rating : 'Unknown';
        const ageRating = age ? age : 'Unknown';
        
        setAgeRating(ageRating);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchAgeRating();
  }, [id]);

  if (!show) {
    return <p>Loading...</p>;
  }


  const posterPath = show.poster_path 
    ? `https://image.tmdb.org/t/p/w342${show.poster_path}`
    : process.env.PUBLIC_URL + '/poster-placeholder.png';

  const backdropPath = show.backdrop_path
    ? (TMDB_API_IMAGE_URL + show.backdrop_path)
    : process.env.PUBLIC_URL + '/movie-tracker-hero.jpg';

  function airDates() {
    
    if (show.first_air_date && show.last_air_date) {
        if(show.in_production) {
            return `${show.first_air_date.slice(0, 4)} - present`
        } else if (show.first_air_date.slice(0, 4) === show.last_air_date.slice(0, 4)) {
          return show.first_air_date.slice(0, 4)
        }
        return `${show.first_air_date.slice(0, 4)} - ${show.last_air_date.slice(0, 4)}`
    }
      return 'Unknown'
    }

  return (
    <div>
        <div className="container-flex backdrop-container">
            <img className='movie-backdrop' src={backdropPath} alt={show.name} />
        </div>
        <div className="movie-box p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-none d-md-block">
                        <img className="img-fluid rounded" src={posterPath} alt={show.name} />
                    </div>
                    <div className="col-md-8">
                        <h1>{show.name}</h1>
                        <p className="movie-year"> ({airDates()})</p>
                        {show.genres.map((genreObj) => (
                            <span key={genreObj.name} className='badge bg-warning text-dark mx-2'>
                                {genreObj.name}
                            </span>
                        ))}
                        <div className="container-fluid px-0">
                            <div className="row justify-content-center align-items-center mx-0 my-3">
                                <div className="col-lg-4 gy-2">
                                    <span className='details-span'>Seasons: </span>
                                    <span>{show.number_of_seasons || 'Unknown'}</span>
                                </div>
                                <div className="col-lg-4 gy-2">
                                    <span className='details-span'>Age Rating: </span>
                                    <span>{ageRating}</span>
                                </div>
                                <div className="col-lg-4 gy-2">
                                    <span>
                                        <img src={process.env.PUBLIC_URL + '/imdb-logo.png'} alt="imdb logo" className='imdb-logo'/>
                                    </span>
                                    <span style={{ verticalAlign: 'middle' }}> { show.vote_average ? (Math.round(show.vote_average * 10) /10).toFixed(1) : 'Unknown'}</span>
                                </div>
                            </div>
                        </div>
                        <p>{show.overview}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
          <Similar id={id} type={'tv'}/>                  
        </div>
    </div>
  );
}

export default SingleMovie;