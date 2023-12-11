import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MoviesList from './components/MoviesList';
import Footer from './components/Footer';



function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  return (
    <div>
      <Header />
      <MainContent onSelectGenre={setSelectedGenre} />
      <MoviesList selectedGenre={selectedGenre} />
      <Footer />
    </div>
    

  );
}

export default App;
