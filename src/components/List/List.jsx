import React from 'react';
import PropTypes from 'prop-types';

const TrendingList = ({children}) => {
  return (
    <ul className='TrendingList'>
      {children}
    </ul>
  )
}

TrendingList.propTypes = {
  children: PropTypes.element,
}

export default TrendingList
