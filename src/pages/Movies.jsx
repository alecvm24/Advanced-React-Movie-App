import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import FilterOptions from "../components/FilterOptions";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const filteredMovies = filter
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
      )
    : movies;

  return (
    <div>
      <h1>Movies</h1>
      <FilterOptions setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );

  return <div>{/* Header, FilterOptions, and MovieList */}</div>;
};

export default Movies;
