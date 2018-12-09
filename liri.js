require("dotenv").config();

//Import Keys.js
var keys = require('./keys.js');
//Grab NPM packages

var inquirer = require("inquirer");
var axios = require("axios");
var spotify = require("spotify");
var moment = require("moment");
var DotEnv = require(".env");




// Add code to access keys 
var spotify = new Spotify(keys.spotify);
// 
  inquirer.prompt([{
    type: 'list',
    name: 'command',
    message: 'What would you like to do?',
    choices: ['concert-this', 'spotify-this', 'movie-this', 'do-what-it-says']
}, {
    type: 'input',
    name: 'value',
    message: 'Enter a name:'


}]).then(function (inquirerResponse) {
    var responseCommand = inquirerResponse.command;
    var promptValue = inquirerResponse.value;
   console.log('this here is the inquirerValue' + promptValue);

})






promptVal= process.argv[2];


axios.get("https://rest.bandsintown.com/artists/" + artist + "events?app_id=codingbootcamp").then(
  function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
});

spotify.search({ type: 'track', query: promptValue }, function (err, apiData) {
  if (err) {
      return console.log('Error Has occured: ' + err);
  }
  var songs = apiData.tracks.items;

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)


});