
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import SingleMovie from './pages/SingleMovie';
import TvShows from './pages/TvShows'
import Movies from './pages/Movies'


function App() {
  

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/:type/:id/:title" element={<SingleMovie />} />
          <Route path="/movies" exact element={<Movies />}/>
          <Route path="/tv-shows" exact element={<TvShows />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
