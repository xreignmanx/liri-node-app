// require("dotenv").config();
require('dotenv').config();

//Import Keys.js and .env
var keys = require('./keys.js');
// var DotEnv = require("/.env");

//Grab NPM packages

var inquirer = require("inquirer");
var Spotify = require('node-spotify-api')
var moment = require("moment");

var promptVal    = process.argv[2];
// Add code to access keys 
let spotify = new Spotify(keys.spotify);
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
   console.log('this here is the inquirerValue' + promptVal);

})


if (process.argv[2] == 'concert-this' ) {
   
  var artist = process.argv.slice(3).join(" ")
  console.log(artist);
 
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  request(queryURL, function (error, response, body) {
      if (error) console.log(error);
      var result  =  JSON.parse(body)[0];
      console.log("Venue name " + result.venue.name);
      console.log("Venue location " + result.venue.city);
      console.log("Date of Event " +  moment(result.datetime).format("MM/DD/YYYY"));
     


  });


  // Name of the venue
  // Venue location
  // Date of the Event (use moment to format this as "MM/DD/YYYY")   
} else if ( process.argv[2] == 'spotify-this-song') {

  var songName = process.argv.slice(3).join(" ");

  if (songName == undefined) {
      songName = "The sign by Ace of Base";
  } 
 

   spotify.search({ type: 'track', query: songName, limit: 10  }, function(err, data) {
          if (err) {
          return console.log('Error occurred: ' + err);
          }

          var tableArray = [];

          for (var i = 0; i < data.tracks.items.length; i++ ) {
              var result = {
                  artist : data.tracks.items[i].album.artists[0].name,
                  album_name : data.tracks.items[i].album.name,
                  song_name : data.tracks.items[i].name,
                  preview_url : data.tracks.items[i].preview_url 
              }
              // tableArray.push(result);
          }
        });
    
          
          // var table = cTable.getTable(tableArray);
  
          // console.log(table);
    
  
// If no song is provided then your program will default to "The Sign" by Ace of Base.
} else if ( process.argv[2] == 'movie-this') {
  var movieName = process.argv.slice(3).join(" ");

  if (movieName == undefined) {
      movieName = "Mr. Nobody";
  } 

  request('http://www.omdbapi.com/?i=tt3896198&apikey=55e8eecb&t=' + process.argv[3], function (error, response, body) {
      
      var result  =  JSON.parse(body);
      console.log("Title :" + result.Title);
      console.log("Year :" + result.Released);
      console.log("IMDB Rating :" + result.imdbRating );
      console.log("Rotten Tomatoes :" + result.Ratings[1].Value);
      console.log("Country :" +  result.Country);
      console.log("Language :" + result.Language);
      console.log("Movie Plot :" + result.Plot);
      console.log("Actors :" +  result.Actors);

  });

} else if ( process.argv[2] == 'do-what-it-says') {
  console.log('do what it says')
}
 
//  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
 
//   console.log(data); 
//   });










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