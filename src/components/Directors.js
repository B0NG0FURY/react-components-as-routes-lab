import React from 'react';
import { directors } from '../data';

let displayDirectors = directors => {
  return directors.map(director => (
    <div>
      <h3>{director.name}</h3>
      <h3>Movies</h3>
      <ul>{displayMovies(director.movies)}</ul>
    </div>
  ));
}

let displayMovies = movies => {
  return movies.map(movie => <li>{movie}</li>);
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors(directors)}
    </div>
  );
}

export default Directors
