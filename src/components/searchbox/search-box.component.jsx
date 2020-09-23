import React from "react";
import './search-box.styles.css'

export const SearchBoxComponent = props => {
  return (
    <input
      className="search-box"
      type='search'
      value={props.searchTerm}
      placeholder={props.placeholder}
      onChange={props.onSearchFn}/>
  )
}


