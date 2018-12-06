require("dotenv").config();


var axios = require("axios");
var spotify = require("spotify");
var moment = require("moment");
var DotEnv = require("DotEnv");
// Add code to access keys 
var spotify = new Spotify(keys.spotify);

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
axios.get("http://www.omdbapi.com").then(
  function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  },

[Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * You'll use Axios to grab data from the [OMDB API]() and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)