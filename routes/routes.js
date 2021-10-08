const express = require('express');
const router = express.Router();

const {
  createMovie,
  readMovies,
  deleteMovie,
  searchMovie,
} = require('../controllers/movies');

router.get('/movie', (req, res) => {
  readMovies(req, res);
});

//add a movie to the list
router.post('/movie', (req, res) => {
  createMovie(req, res);
});

// search for a movie in the list
router.get('/movie/:id', (req, res) => {
  searchMovie(req, res);
});

// remove movie from the list
router.delete('/movie/:id', (req, res) => {
  deleteMovie(req, res);
});

module.exports = router;
