import React from 'react'
// import PropTypes from 'prop-types'

const MovieDetailsComponent = ({ movieDetails }) => {
    console.log(movieDetails);
    const { title, vote_average, overview, genres, poster_path, release_date } = movieDetails;
    console.log(genres);

  return (
    <div>
          <h2>{title} ({release_date}) </h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {/* <p>{genres[0]}</p> */}
    </div>
  )
}

MovieDetailsComponent.propTypes = {

}

export default MovieDetailsComponent
