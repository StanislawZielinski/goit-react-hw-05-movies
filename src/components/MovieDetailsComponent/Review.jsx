import React from 'react';
import fetchReview from 'services/fetchReview';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = props => {
  const { id } = useParams();
  const [review, setReview] = useState([]);

  async function fetchCastReview(id) {
      try {
        const response = await fetchReview(id);
        setReview(response);
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {
    fetchCastReview(id);
  }, [id]);

  const renderReview = (review) => {
    return review.map(
      ({id,author,content}) =>
        <li key={id}>
          <h5>{author}</h5>
          <p>{content}</p>
        </li>
    )
  }
  return (
    <div>
      Review
      <ul>
        {review.length > 0 ? (renderReview(review)) : (<p>There is no review yet</p>)}
      </ul>
    </div>
  )
}

Review.propTypes = {
  review: PropTypes.array,
  renderReview: PropTypes.element,
}

export default Review
