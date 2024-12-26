import React from "react";
import styles from "./Business.module.css"


const Business = ( { business } ) => {
  const redirectToWebsite = () => {
    // Redirect the user to the restaurant's website
    window.open(business.website, '_blank');
  };   

  const redirectToMap = () =>{
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      business.address)}`
    window.open(mapUrl, '_blank')
  }

    return (
      <div className={styles.Business}>
        <div className={styles.imageContainer}>
          <img src={business.src} alt="" />
        </div>
        <h2>{business.name}</h2>
        <div className={styles.BusinessInformation}>
          <div className={styles.BusinessAddress}>
            <p className={styles.redirectMap} onClick={redirectToMap}>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state} ${business.zipCode}`}</p>
          </div>
          <div className={styles.BusinessReviews}>
            <h3>{business.category.toUpperCase()}</h3>
            <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
            <p>{`${business.reviewCount} reviews`}</p>              
          </div>
          
        </div>
        <button className={styles.WebBtn} onClick={redirectToWebsite} target="_blank"  >
              Visit Website
              </button>
      </div>
    );
  };
  


export default Business