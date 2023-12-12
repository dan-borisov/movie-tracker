import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../config';

function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

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

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
}

export default SingleMovie;