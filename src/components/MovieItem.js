import React from "react";
import "./MovieItem.css";

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieItem;
