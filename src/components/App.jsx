import React from 'react';
import { Routes, Route, NavLink} from "react-router-dom";
// import PropTypes from 'prop-types';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import NotFound from '../pages/NotFound';

export const App = () => {
  
  return (
    <div className='container'>
      <nav className='nav'>
          <NavLink className='navLink' to="/goit-react-hw-05-movies">Home</NavLink>
          <NavLink className='navLink' to="/movies">Movies</NavLink>
      </nav>
      <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
