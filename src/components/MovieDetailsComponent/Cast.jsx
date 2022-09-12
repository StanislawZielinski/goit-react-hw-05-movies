import React from 'react';
import fetchCast from 'services/fetchCast';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'

const Cast = props => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  console.log(id);

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
    console.log(cast)
  },[])
  return (
    <div>
      Cast
    </div>
  )
}

Cast.propTypes = {

}

export default Cast
