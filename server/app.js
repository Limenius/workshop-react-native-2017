var express = require('express')
var app = express()
var movies = require('./data.js').movies
var actors = require('./data.js').actors

// respond the list of movies
app.get('/movies', function (req, res) {
  res.json(movies)
})

// responds with a movie
app.get('/movies/:name', function (req, res) {
  let movie = movies.find(function (movie) {
    return movie.name === req.params.name
  })
  let movieOut = {
    image: movie.image,
    name: movie.name,
    year: movie.year,
    actors: movie.actors.map((actor) => ({
      name: actor,
      image: actors[actor].image
    }))}
  res.json(movieOut);
})

// responds with an actor
app.get('/actors/:name', function (req, res) {
  let actor = actors[req.params.name]
  res.json(actor);
})

app.use(express.static('server/images'))

app.listen(3000, function () {
  console.log('Travolta server listening on port 3000')
})
