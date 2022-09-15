import MovieDetailsComponent from 'components/MovieDetailsComponent/MovieDetailsComponent';
import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import getMovieById from 'services/getMovieById';
import PropTypes from 'prop-types';

const MovieDetails = props => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    async function fetchMovie(id) {
        try {
            const response = await getMovieById(id);
            setMovieDetails(response);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchMovie(id)
    }, []);

    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/goit-react-hw-05-movies/movies";
    console.log(location);
  return (
      <div>
          <Link to={backLinkHref}>Go Back</Link>
          <MovieDetailsComponent movieDetails={movieDetails} />
          <div className='wrapperAdditionalInfo'>
              <p>Additional Information</p>
              <ul className='addInfoList'>
                <li>
                    <Link to="cast" state={location.state}>Cast</Link>
                </li>
                <li>
                    <Link to="review" state={location.state}>Review</Link>
                </li>
              </ul>
              <Outlet />
          </div>
    </div>
  )
}

MovieDetails.propTypes = {
    backLinkHref: PropTypes.string,
    movieDetails: PropTypes.object,
    state: PropTypes.string,
}

export default MovieDetails
