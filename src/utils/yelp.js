const apiKey = "eGfjf71k8n1HBvCWwA2BtFHiJckh0KI4JCpEto8KV-5ShKclTtlOQyrRmTcDsrWA-NVpdCE2Vvdjwlf9k0VhVsTGNUa3_UVCP4KcTdoWApSwsDZJu1aE43Q8MaDZZHYx"


const Yelp = {
  async search(term, location, sortBy) {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
          headers : {
            Authorization : `Bearer ${apiKey}`,
          }
        }
      );

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const jsonResponse = await response.json(); // Corrected this line
      const businesses = jsonResponse.businesses; // Corrected this line

      return businesses.map((business) => ({
        id: business.id,
        src: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
        website: business.url,
      }));
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  },
};

export default Yelp;