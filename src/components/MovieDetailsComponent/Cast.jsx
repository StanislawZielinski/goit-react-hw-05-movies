import React from 'react';
import fetchCast from 'services/fetchCast';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'

const Cast = props => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  async function fetchCastComponent(id) {
      try {
        const response = await fetchCast(id);
        console.log(response)
        setCast(response);
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {
    fetchCastComponent(id);
  }, []);
  const renderCast = (cast) => {
    return cast.map(
      elem =>
        <li>
          <div className='CastMiniature'><img src={`https://image.tmdb.org/t/p/original${elem.profile_path}`} alt="this actor has no profile"/></div>      
          <p>{elem.name}</p>
          <p>{elem.character}</p>
        </li>
    )
  }
  return (
    <div>
      Cast
      <ul>
        {renderCast(cast)}
      </ul>
    </div>
  )
}

Cast.propTypes = {

}

export default Cast
