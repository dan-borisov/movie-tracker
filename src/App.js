
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import SingleMovie from './pages/SingleMovie';



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
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
