import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import fetch from 'services/fetch';
import List from 'components/List/List';
import { Link, useSearchParams, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(error)
    resetSearch();
    fetchMovies(searchValue);
    const form = event.currentTarget;
    form.reset();
  }
  const handleChange = (event) => {
    setSearchValue(event.currentTarget.value);
  }

  const resetSearch = () => {
    return (setSearchValue(''))
  }

    async function fetchMovies(searchValue) {
        setIsSpinnerLoading(true);
        try {
            const response = await fetch(searchValue);
            if (response.length > 0) {
              setMovieList([...response]);
              setSearchParams({query:searchValue})
            }
            else {
                alert("Please try again. Minimum number of characters - 2 ")
            }
        } catch (error) {
            setError(error);
            console.log(error)
        }
        finally {
            setIsSpinnerLoading(false);
        }   
  }
  const query = searchParams.get("query");
  useEffect(() => {
    if (query !== null) {
    fetchMovies(query)
    };
  }, [query]);
  
  const location = useLocation();
  const renderMovies = (movieList) => {
    return movieList.map(
      elem =>
        <Link to={`${elem.id}`} key={elem.id} state={{ from: location }}>
          <li className="trendingElem" key={elem.id} >
            {elem.title} {elem.name}
          </li>
        </Link>)
  }


  return (
    <div>
      <SearchBar onSubmit={handleSubmit} onChange={handleChange} />
      <Audio visible={isSpinnerLoading} />
      <List children={renderMovies(movieList)} />
    </div>
  )
}

Movies.propTypes = {
  onSubmit: PropTypes.func,
  visible: PropTypes.bool,
  children: PropTypes.array,
}

export default Movies
