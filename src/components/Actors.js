import React from 'react';
import { actors } from '../data';

let displayActors = actors => {
  return actors.map(actor => (
    <div>
      <h3>{actor.name}</h3>
      <h3>Movies</h3>
      <ul>{displayMovies(actor.movies)}</ul>
    </div>
  ));
}

let displayMovies = movies => {
  return movies.map(movie => <li>{movie}</li>);
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors(actors)}
    </div>
  );
};

export default Actors;
