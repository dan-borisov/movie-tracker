
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import SingleMovie from './pages/SingleMovie';
import SingleShow from './pages/SingleShow'
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
          <Route path="/movie/:id/:title" element={<SingleMovie />} />
          <Route path="/tv-show/:id/:title" element={<SingleShow />} />
          <Route path="/movies" exact element={<Movies />}/>
          <Route path="/tv-shows" exact element={<TvShows />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
