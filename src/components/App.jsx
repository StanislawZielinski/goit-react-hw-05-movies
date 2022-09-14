import React, {lazy} from 'react';
import { Routes, Route } from "react-router-dom";
// import PropTypes from 'prop-types';
import SharedLayout from 'pages/SharedLayout';
const Home = lazy(()=>import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(()=> import('../components/MovieDetailsComponent/Cast'));
const Review = lazy(()=>import('../components/MovieDetailsComponent/Review'));


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
