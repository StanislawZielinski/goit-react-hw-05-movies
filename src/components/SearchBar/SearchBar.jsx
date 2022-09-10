import React from 'react'
// import PropTypes from 'prop-types'

const SearchBar = ({onSubmit, onChange}) => {
  return (
    <div>
    <form className="SearchForm" onSubmit={onSubmit}>
        <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="search"
        onChange={onChange}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </div>
  )
}

SearchBar.propTypes = {

}

export default SearchBar
