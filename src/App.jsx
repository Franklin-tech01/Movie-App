import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL =
  " http://www.omdbapi.com/?i=tt3896198&apikey=b6294e20";

const movie1 = {
  Title: "Miles Morales Ultimate Spiderman",
  Year: "2021",
  imdbID: "tt14311386",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNmMzODkwNDktMTkyMy00MmU5LWE4MGMtYzIzZjdjNmJiZDRiXkEyXkFqcGdeQXVyNDU1NDQ0NzE@._V1_SX300.jpg",
};

const App = () =>  {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
        <h1>MoviePlug</h1>

        <div className="search">
          <input
            placeholder="Search for movies idan"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movie1} /> */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;