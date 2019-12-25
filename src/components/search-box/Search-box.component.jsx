import React from 'react';
import './search-box.css';
const SearchBox = ({placeholder,handleSearch})=>{
    return (
        <input type="search"
        className="search" 
        placeholder={placeholder}
        onChange={handleSearch}/>
    )
}
export default SearchBox;