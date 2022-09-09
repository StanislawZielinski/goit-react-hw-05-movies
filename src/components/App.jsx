import React from 'react';
import { Routes, Route, NavLink, Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import NotFound from '../pages/NotFound';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <nav className='nav'>
          <NavLink to="/goit-react-hw-05-movies">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
