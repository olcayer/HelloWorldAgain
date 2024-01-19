// Import Express package to make the application server
const express = require('express')

// Instattiating the express module
const app = express()

// In which port the app server will run
const port = process.env.VCAP_APP_PORT || 5000


//Creating the API with route (hello)
// req - Request (Input) http://.../hello?user=Partha
// res - Response (Output)
app.get('/hello', (req, res) => {
console.log("how are you!")
console.log(req.query.user)
res.send("hellooooooooooo"+' '+req.query.user)
})

app.get('/weather', (req, res) =>{
    var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.openweathermap.org/data/2.5/weather?q=Kolkata&PUT YOUR APIKEY&units=metric',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

})


app.listen(port, () => {
console.log('Server is running on port 5000')
})


console.log("welcome ZAPYard");