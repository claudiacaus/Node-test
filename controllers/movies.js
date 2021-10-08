const uuid = require('uuid').v4;
let movies = require('../movies.json');

function deleteMovie(req, res) {
  const id = req.params.id;

  const movieToDelete = movies.find((movie) => movie.id == req.params.id);

  if (!movieToDelete) {
    res.status(404);
    res.send(`No such movie with this id: ${req.params.id}`);
    return;
  }

  movies.splice(movies.indexOf(movieToDelete), 1);
  res.status(200);
  res.send('Movie is deleted');
}

function createMovie(req, res) {
  if (isInvalid(req)) {
    res.status(400);
    res.send(
      'Invalid request, please add Movie title, director and release-date',
    );
    return;
  }
  const id = uuid();

  let newMovie = {
    id: id,
    title: req.body.title,
    director: req.body.director,
    release_date: req.body.release_date,
  };

  movies.push(newMovie);
  res.status(201);
  res.send(`The ${req.body.title} id is: ${id}`);
}

function searchMovie(req, res) {
  const id = req.params.id;

  let movie = movies.find((movie) => movie.id === id);
  if (movie) {
    res.status(200);
    res.json(movie);
  } else {
    res.status(404).send('Movie not found');
  }
}

function readMovies(req, res) {
  res.setHeader('content-Type', 'application/json');
  res.status(200);
  res.send(movies);
}

function isInvalid(req) {
  if (
    typeof req.body == 'undefined' ||
    typeof req.body.title == 'undefined' ||
    typeof req.body.director == 'undefined' ||
    typeof req.body.release_date == 'undefined'
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = { readMovies, createMovie, deleteMovie, searchMovie };
