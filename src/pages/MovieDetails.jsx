import MovieDetailsComponent from 'components/MovieDetailsComponent/MovieDetailsComponent';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import getMovieById from 'services/getMovieById';
// import PropTypes from 'prop-types'

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

  return (
    <div>
          <MovieDetailsComponent movieDetails={movieDetails} />
    </div>
  )
}

MovieDetails.propTypes = {

}

export default MovieDetails
