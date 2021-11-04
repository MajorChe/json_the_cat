const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response,body) =>{
    const data = JSON.parse(body);
    if (!error) {
      if (data.length === 0) {
        callback('Could not find the breed!!!',null);
      } else {
        callback(null,data[0].description);
      }
    }
  });
};

module.exports = {fetchBreedDescription};