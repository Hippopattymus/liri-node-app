# liri-node-app

> LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI uses the following commands:

> concert-this

> spotify-this-song

> movie-this

> do-what-it-says

## Technologies used:

- Node.js
- Javascript
- npm packages:
- spotify - A simple to use API library for the Spotify REST API.
- axios - Axios is a promise based HTTP client for the browser and node.js
- dotenv - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

## How to Run LIRI-Bot

#### One: **node liri concert-this**

This will show the next upcoming concert for an artist inputted.

#### Two: **node liri spotify-this-song <song name here>**

This will show the following information about the song in your terminal/bash window:

> - Artist(s)
> - The song's name
> - A preview link of the song from Spotify
> - The album that the song is from
> - If no song is provided then the program will default to "The Sign" by Ace of Base

#### Three: **node liri.js movie-this <movie name here>**

This will output the following information to your terminal/bash window:

> - Title of the movie.
> - Year the movie came out.
> - IMDB Rating of the movie.
> - Country where the movie was released.
> - Language of the movie.
> - Plot of the movie.
> - Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody'

#### Step Four: **node liri.js do-what-it-says**

> This will output the command placed in random.txt file

## Display

![Screenshot One](/screenshots/1.png)

![Screenshot Two](/screenshots/2.png)

## Author

- Connor Paxton
