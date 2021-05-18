import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ articleSearch, onSearchChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor='article-search'>article search</label>
        <input 
            id='article-search'
            type='text'
            value={articleSearch}
            onChange={onSearchChange}
        />
        <button aria-label='search-articles'>submit</button>    
    </form>
)

Search.propTypes = {
    articleSearch: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default Search
