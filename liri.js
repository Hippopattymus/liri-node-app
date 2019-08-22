require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var fs = require("fs");
var moment = require("moment");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var text = "";

const choice = process.argv[2];
const input = process.argv.slice(3).join(" ");

switch (choice) {
  case "concert-this":
    concert(input);
    break;
  case "spotify-this-song":
    if (input) {
      spotifyThis(input);
    } else {
      spotifyThis("The Sign Ace of Base");
    }
    break;
  case "movie-this":
    if (input) {
      omdb(input);
    } else {
      omdb("Mr. Nobody");
    }
    break;
  case "do-what-it-says":
    thing();
    break;
  default:
    console.log("Try again");
}

//concert-this
function concert(artist) {
  var url =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp";

  axios.get(url).then(function(response) {
    text =
      "\n___Upcoming Events___" +
      "\nArtist: " +
      artist +
      "\nVenue: " +
      response.data[0].venue.name +
      "\nLocation: " +
      response.data[0].venue.city +
      ", " +
      response.data[0].venue.country +
      "\nDate: " +
      moment(response.data[0].datetime).format("MM/DD/YYYY") +
      "\n";

    console.log(text);
    fileAppend();
  });
}

//spotify-this-song
function spotifyThis(song) {
  spotify.search({ type: "track", query: song }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    text =
      "\n___Track Info___" +
      "\nArtist: " +
      data.tracks.items[0].artists[0].name +
      "\nSong: " +
      data.tracks.items[0].name +
      "\nLink: " +
      data.tracks.items[0].external_urls.spotify +
      "\nAlbum: " +
      data.tracks.items[0].album.name +
      "\n";
    console.log(text);
    fileAppend();
  });
}

//movie-this
function omdb(movie) {
  var queryUrl =
    "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl).then(function(response) {
    text =
      "\n___Movie Info___" +
      "\nTitle: " +
      response.data.Title +
      "\nRelease Year: " +
      response.data.Year +
      "\nRating: " +
      response.data.Rated +
      "\nRelease Country: " +
      response.data.Country +
      "\nLanguage: " +
      response.data.Language +
      "\nPlot: " +
      response.data.Plot +
      "\nActors: " +
      response.data.Actors +
      "\n";

    console.log(text);
    fileAppend();
  });
}

//do-what-it-says
function thing() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(error);
    }
    var random = data.split(",");
    spotifyThis(random[1]);
  });
}

function fileAppend() {
  fs.appendFile("log.txt", "\n" + text, function(err) {
    // If an error was experienced we will log it.
    if (err) {
      return console.log(err);
    }
  });
}
