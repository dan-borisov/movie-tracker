
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import SingleMovie from './pages/SingleMovie';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';


function App() {
  
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/movie/:id/:title" element={<SingleMovie />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/tv-shows" element={<TvShows />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
