import React from 'react';
import { Routes, Route } from "react-router-dom";
// import PropTypes from 'prop-types';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from '../components/MovieDetailsComponent/Cast';
import Review from '../components/MovieDetailsComponent/Review';
import SharedLayout from 'pages/SharedLayout';

export const App = () => {
  return (

      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="review" element={<Review/>} ></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>

  );
};
