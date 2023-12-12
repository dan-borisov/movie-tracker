// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MoviesList from './components/MoviesList';
import Footer from './components/Footer';
import SingleMovie from './components/SingleMovie';



function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainContent onSelectGenre={setSelectedGenre} />
                <MoviesList selectedGenre={selectedGenre} />
              </>
            }
          />
          <Route path="/movie/:id/:title" element={<SingleMovie />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
