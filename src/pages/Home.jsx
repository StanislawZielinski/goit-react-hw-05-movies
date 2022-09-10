import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fetchTrendings from 'services/fetchTrendings';
import List from 'components/List/List';
// import PropTypes from 'prop-types'
const Home = () => {
  const [trendingList, setTrendingList] = useState([]);

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
            <li className="trendingElem" key={elem.id} >
              {elem.title} {elem.name}
            </li>)     
  }
  return (
    <div>
      <h2>Trending today</h2>
      <List children={renderTrending(trendingList)}></List>
    </div>
  )
}

Home.propTypes = {

}

export default Home

