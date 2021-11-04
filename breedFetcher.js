const request = require('request');
const args = process.argv.slice(2);
const url = `https://a1pi.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(url,(error,response,body) =>{
  console.log('Error: ', error);
  console.log('Status: ',response.statusCode);
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Could not find the breed!!!');
  } else {
    console.log('Body:',data[0].description);
  }
  
});