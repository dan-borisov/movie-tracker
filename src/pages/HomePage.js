import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ARandomButton from '../components/ARandomButton.js'
import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../config.js'
import '../styles/Homepage.css'


function HomePage() {
   const [popularMovies, setPopularMovies] = useState([])
   const [upcomingMovies, setUpcomingMovies] = useState([])
   const [popularShows, setPopularShows] = useState([])
   const [runningShows, setRunningShows] = useState([])
    
    useEffect(() => {

        // Fetch popular movies
        const fetchPopularMovies = async () => {
            try {
              const endpoint = `${TMDB_API_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&include_adult=false`;
              const response = await fetch(endpoint)
              const data = await response.json()
              setPopularMovies(data.results)
              
            } catch (error) {
              console.error('Error fetching movie details', error);
            }
          };
      
          fetchPopularMovies();

        // Fetch popular shows
        const fetchPopularShows = async () => {
            try {
              const endpoint = `${TMDB_API_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&include_adult=false`;
              const response = await fetch(endpoint)
              const data = await response.json()
              setPopularShows(data.results)
              
            } catch (error) {
              console.error('Error fetching movie details', error);
            }
          };
      
          fetchPopularShows();

                  // Fetch upcoming movies
        const fetchUpcomingMovies = async () => {
            try {
              const endpoint = `${TMDB_API_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&include_adult=false`
              const response = await fetch(endpoint)
              const data = await response.json()
              setUpcomingMovies(data.results)
              
            } catch (error) {
              console.error('Error fetching movie details', error);
            }
          };
      
          fetchUpcomingMovies();

                  // Fetch running shows
        const fetchRunningShows = async () => {
            try {
              const endpoint = `${TMDB_API_BASE_URL}/tv/on_the_air?api_key=${TMDB_API_KEY}&include_adult=false`
              const response = await fetch(endpoint)
              const data = await response.json()
              setRunningShows(data.results)
              
            } catch (error) {
              console.error('Error fetching movie details', error);
            }
          };
      
          fetchRunningShows();

    }, [])

    function slugify(title) {
        return title.toLowerCase().replace(/[^a-zA-Z ]/g, '').replace(/\s+/g, '-');
      }

    return (
        <main>
            <div className="container-fluid hero-container-home">
                <img className="hero-image-home" src={process.env.PUBLIC_URL + '/movie-tracker-hero.jpg'} alt="Movier Tracker Hero" />
                <div className="hero-content-home">
                    <h1>Welcome to MovieTracker</h1>
                    <p>Explore your favourite movies and TV Shows</p>
                    <div className="hero-buttons">
                        <ARandomButton />
                    </div>
                </div>
            </div>
            <div className="container homepage-containers">
                <h2>Popular Movies</h2>
                <div className="row gy-4">
                {popularMovies.slice(0, 12).map((movie) => {
                    const posterPath = movie.poster_path
                        ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                        : process.env.PUBLIC_URL + '/poster-placeholder.png';
                    
                    return (
                        <div key={movie.id} className="col-6 col-md-4 col-lg-2">
                        <Link to={`/movie/${movie.id}/${slugify(movie.title)}`}>
                            <img className="movieCard img-fluid rounded" src={posterPath} alt={movie.title} />
                        </Link>
                        </div>
                    );
                    })}
                </div>
            </div>
            <div className="container homepage-containers">
                <h2>Popular Shows</h2>
                <div className="row gy-4">
                {popularShows.slice(0, 12).map((show) => {
                    const posterPath = show.poster_path
                        ? `https://image.tmdb.org/t/p/w342${show.poster_path}`
                        : process.env.PUBLIC_URL + '/poster-placeholder.png';
                    
                    return (
                        <div key={show.id} className="col-6 col-md-4 col-lg-2">
                        <Link to={`/show/${show.id}/${slugify(show.name)}`}>
                            <img className="movieCard img-fluid rounded" src={posterPath} alt={show.name} />
                        </Link>
                        </div>
                    );
                    })}
                </div>
            </div>
            <div className="container homepage-containers">
                <h2>Upcoming Movies</h2>
                <div className="row gy-4">
                {upcomingMovies.slice(0, 12).map((movie) => {
                    const posterPath = movie.poster_path
                        ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                        : process.env.PUBLIC_URL + '/poster-placeholder.png';
                    
                    return (
                        <div key={movie.id} className="col-6 col-md-4 col-lg-2">
                        <Link to={`/movie/${movie.id}/${slugify(movie.title)}`}>
                            <img className="movieCard img-fluid rounded" src={posterPath} alt={movie.title} />
                        </Link>
                        </div>
                    );
                    })}
                </div>
            </div>
            <div className="container homepage-containers">
                <h2>Running Shows</h2>
                <div className="row gy-4">
                {runningShows.slice(0, 12).map((show) => {
                    const posterPath = show.poster_path
                        ? `https://image.tmdb.org/t/p/w342${show.poster_path}`
                        : process.env.PUBLIC_URL + '/poster-placeholder.png';
                    
                    return (
                        <div key={show.id} className="col-6 col-md-4 col-lg-2">
                        <Link to={`/show/${show.id}/${slugify(show.name)}`}>
                            <img className="movieCard img-fluid rounded" src={posterPath} alt={show.name} />
                        </Link>
                        </div>
                    );
                    })}
                </div>
            </div>
        </main>
    );
}

export default HomePage;
