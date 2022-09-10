import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fetch from 'services/api';
import TrendingList from 'components/TrendingList/TrendingList';
// import PropTypes from 'prop-types'
const Home = () => {
  const [trendingList, setTrendingList] = useState([]);

  async function fetchTrending () {
    try {
    const responseData = await fetch();
      console.log(responseData);
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
            <li className="trendingElem" key={elem.id} >
              {elem.title} {elem.name}
            </li>)     
  }
  return (
    <div>
      <h2>Trending today</h2>
      <TrendingList children={renderTrending(trendingList)}></TrendingList>
    </div>
  )
}

Home.propTypes = {

}

export default Home

