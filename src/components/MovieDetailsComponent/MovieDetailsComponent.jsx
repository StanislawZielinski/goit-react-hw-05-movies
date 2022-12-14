import React from 'react'
import PropTypes from 'prop-types';

const MovieDetailsComponent = ({ movieDetails }) => {
  const { title, vote_average, overview, genres, poster_path, release_date } = movieDetails;

  return (
    <div className='wrapper'>
      <div className='posterThumb'><img className="image_placeholder" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="sorry, we couldn't find this poster:/" /></div>
      <div className='movieDescritpion'>
        <h2>{title ? (title)  : (<p>Sorry, check a different movie</p>)} {(release_date?.slice(0, 4))}</h2>
        <p>User Score {(vote_average*10).toFixed(0)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres ? genres.map((genre => genre.name)).join('  ') : ("Sorry, there is no genres for this movie" )}</p>
      </div>
    </div>
  )
}

MovieDetailsComponent.propTypes = {
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.object,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
}

export default MovieDetailsComponent