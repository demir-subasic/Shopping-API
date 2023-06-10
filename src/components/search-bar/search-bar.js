import React from 'react'
import './search-bar.css'

const SearchBar = ({handleSearch}) => {

    const inputHandler = (e) => {
        let data = e.target.value;
        handleSearch(data);
    }
    

  return (
    <div className='search'>
      <input className='search-input' onChange={inputHandler} type="text" placeholder='Search products'/>
    </div>
  )
}

export default SearchBar
