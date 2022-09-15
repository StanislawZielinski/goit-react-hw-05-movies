import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fetchTrendings from 'services/fetchTrendings';
import List from 'components/List/List';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const location = useLocation();
  async function fetchTrending () {
    try {
    const responseData = await fetchTrendings();
      setTrendingList(responseData);
    }
    catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    fetchTrending();
  },[])

  
  const renderTrending = (trendingList) => {
    return trendingList.map(
        elem =>
        <Link to={`/goit-react-hw-05-movies/movies/${elem.id}`} key={elem.id} state = {{ from: location }}>
          <li className="trendingElem" key={elem.id} >
            {elem.title} {elem.name}
          </li>
        </Link>)     
  }
  return (
    <div>
      <h2>Trending today</h2>
      <List children={renderTrending(trendingList)}></List>
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.element.isRequired
}

export default Home

