import React from "react";
import Movie from "./Movie";
import "./styles.css";
export default function Movies() {
  const [movies, setMovies] = React.useState([
    {
      name: "Chak de India",
      rating: 8.3,
      actors: ["srk", ", ", "sg"],
      description: "xyz",
      liked: false,
      watchList: "Add to watchlist"
    },
    {
      name: "Dhoom",
      rating: 7.5,
      actors: ["ab", ", ", "ja", ", ", "ed", ", ", "ud"],
      description: "xyz",
      liked: false,
      watchList: "Add to watchlist"
    },
    {
      name: "Dhoom2",
      rating: 8.0,
      actors: ["hr", ", ", "ar", ", ", "ud"],
      description: "xyz",
      liked: false,
      watchList: "Add to watchlist"
    }
  ]);

  const getFormattedMovie = (movie) => {
    movie.name = movie.name.toUpperCase();
    return movie;
  };
  const handleDelete = (name) => {
    const filteredMovies = movies.filter((movie) => movie.name !== name);
    setMovies(filteredMovies);
  };

  const handleLike = (name) => {
    const likedMovie = movies.map((movie) => {
      if (movie.name === name) {
        movie.liked = !movie.liked;
      }
      return movie;
    });
    setMovies(likedMovie);
  };
  const handleWatchList = (name) => {
    const watchListedMovie = movies.map((movie) => {
      if (movie.name === name) {
        if (movie.watchList === "Add to watchlist") {
          movie.watchList = "Remove from watchlist";
        } else if (movie.watchList === "Remove from watchlist") {
          movie.watchList = "Add to watchlist";
        }
      }
      return movie;
    });
    setMovies(watchListedMovie);
  };

  return (
    <>
      {movies.length > 0 && (
        <div>There are {movies.length} items in your list</div>
      )}
      {movies.length !== 0
        ? movies.map((movie) => (
            <Movie
              movie={getFormattedMovie(movie)}
              key={movie.name}
              onWatchList={handleWatchList}
              onLike={handleLike}
              onDelete={handleDelete}
            />
          ))
        : "There are no items in your list"}
    </>
  );
}
