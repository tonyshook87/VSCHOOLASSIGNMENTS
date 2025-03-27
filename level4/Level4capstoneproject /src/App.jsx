import { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Movies from './Components/Movies';
import {BrowserRouter as Router, Routes, Route} from'react-router-dom';
import './App.css';
import Movieform from './Components/Movieform';
import Watchedmovies from './Components/Watchedmovies';
import Watchlist from './Components/Watchlist';
import Nav from './Components/Nav';

export default function App() {
 

  return (
    <div>
      <Router>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<Movies />} />
          <Route path="/about" element= {<About />} />
          <Route path="/create" element= {<Movieform />} />
          <Route path="/watched" element= {<Watchedmovies />} />
          <Route path="/watchlist" element= {<Watchlist />} />
        </Routes>
      </Router>
    </div>
  )
}


