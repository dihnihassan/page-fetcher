const fs = require('fs');
console.log(process.argv);

// HTTP Request
const request = require('request');
request(process.argv[2], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Example homepage.
  
  fs.writeFile(process.argv[3], body, err =>{
    if(body) {
      console.log("Downloaded and saved " + body.length + " bytes to " + process.argv[3]);
    }
    if(err) {
      console.error(err);
    }
  });
  
});



// Save HTML from www.example.edu/ to another file using command line 
// Similar to async acitivity?
// make http request
// after http request take data and write to a file
// callback into writeFile function???

