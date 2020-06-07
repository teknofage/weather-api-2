var unirest = require('unirest');
var express = require('express');
var app = express();

app.get('/', function(req, res){
    unirest.get("https://community-open-weather-map.p.rapidapi.com/weather")
      .header("X-RapidAPI-Key", "a5f3794ca9msh5810a8c7ee6f887p17dbc9jsn8e4771044fc1")
      .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
      .query({
          'appid': 'default-application_4496002',
          'lon': '12.4924',
          'lat': '41.8902',
          'units': 'metric',
          'mode': 'html'
      })
      .end(function (result) {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.write(result.body);
          console.log('Colosseum, I am coming!');
      });
    })
    app.listen(8081, function(){
      console.log('Server running at https://127.0.0.1:8081/');
    })