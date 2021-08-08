import React from 'react';
import { movies } from '../data';

let displayMovies = movies => {
  return movies.map(movie => (
    <div>
      <h3>{movie.title}</h3>
      <h3>Runtime: {movie.time}</h3>
      <h3>Genres</h3>
      <ul>{displayGenres(movie.genres)}</ul>
    </div>
  ));
}

let displayGenres = genres => {
  return genres.map(genre => <li>{genre}</li>);
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {displayMovies(movies)}
    </div>
  );
};

export default Movies;
