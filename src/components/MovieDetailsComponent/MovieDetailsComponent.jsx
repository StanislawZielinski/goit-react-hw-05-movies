import React from 'react'
// import PropTypes from 'prop-types'

const MovieDetailsComponent = ({ movieDetails }) => {
  const { title, vote_average, overview, genres, poster_path, release_date } = movieDetails;
  return (
    <div className='wrapper'>
      <div className='posterThumb'><img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="desription" /></div>
      <div className='movieDescritpion'>
        <h2>{title} ({release_date?.slice(0, 4)}) </h2>
        <p>User Score {(vote_average*10).toFixed(0)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres?.map((genre => genre.name)).join('  ')}</p>
      </div>
    </div>
  )
}

MovieDetailsComponent.propTypes = {

}

export default MovieDetailsComponent