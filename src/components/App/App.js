import React, { useState } from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../utils/yelp";

const App = () => {
  const [businesses, setBusinesses] = useState([]);
  const [corsVisible, setCorsVisible] = useState(true)

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  } 

  const handleClick = () => {
    setCorsVisible(false)
  }

  return (
    <div className={styles.App}>
      <h1>Taste Navigator Hub</h1>
      <SearchBar searchYelp={searchYelp} />
      {corsVisible && 
      <article className={styles.article}>before using the website make sure is <a onClick={handleClick} href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel="noopener noreferrer"> ON</a></article>
      }
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
