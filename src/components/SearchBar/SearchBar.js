import React, { useState } from "react";
import styles from './SearchBar.module.css'

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

function SearchBar( { searchYelp } ) {
    const [term, setTerm] = useState('')
    const [location, setLocation] = useState('')
    const [sortBy, setSortBy] = useState("best_match")

    const getSortByMatch = (sortByOption) => {
      if(sortBy === sortByOption){
        return styles.active
      }
      return ""
    }

    const handleSortByOptions = (sortByOption) =>{
      setSortBy(sortByOption)
    }

    const handleTermChange = (e) =>{
      setTerm(e.target.value)
    }

    const handleLocationChange = (e) =>{
      setLocation(e.target.value)
    }

    const handleSearch = (e) => {
      e.preventDefault()
      searchYelp(term, location, sortBy)
    }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li 
          className={getSortByMatch(sortByOptionValue)}
          key={sortByOptionValue}
          onClick ={ () => {
              handleSortByOptions(sortByOptionValue)
             }}
             >
              {sortByOption}
          </li>;
        });
      };
    
    return (
        <div className={styles.SearchBar}>
        <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
        </div>
        <form onSubmit={handleSearch}>
            <div className={styles.SearchBarFields}>
                <input type="search-bar" placeholder="search" onChange={handleTermChange} />
                <input type="search-bar" placeholder="Where?" onChange={handleLocationChange} />
            </div>
            <div className={styles.SearchBarSubmit}>
            <button type="submit">Let's Go</button>
          </div>
        </form>
        </div>
    )
}

export default SearchBar