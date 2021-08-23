import React from "react";
import Movie from "./Movie";
import "./styles.css";
import WatchList from "./WatchList";
export default function Movies() {
  const [movies, setMovies] = React.useState([
    {
      name: "Chak de India",
      rating: 8.3,
      actors: ["srk", ", ", "sg"],
      description: "xyz",
      liked: false,
      watchList: false
    },
    {
      name: "Dhoom",
      rating: 7.5,
      actors: ["ab", ", ", "ja", ", ", "ed", ", ", "ud"],
      description: "xyz",
      liked: false,
      watchList: false
    },
    {
      name: "Dhoom2",
      rating: 8.0,
      actors: ["hr", ", ", "ar", ", ", "ud"],
      description: "xyz",
      liked: false,
      watchList: false
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
      const likedMovieCopy = { ...movie };
      if (likedMovieCopy.name === name) {
        likedMovieCopy.liked = !likedMovieCopy.liked;
      }
      return likedMovieCopy;
    });
    setMovies(likedMovie);
  };

  const [watchList, setwatchListMovies] = React.useState([]);

  const handleWatchList = (name) => {
    const watchListedMovie = movies.map((movie) => {
      const wLMovieCopy = { ...movie };
      if (wLMovieCopy.name === name) {
        if (wLMovieCopy.watchList) {
        }
        wLMovieCopy.watchList = !wLMovieCopy.watchList;
      }

      return wLMovieCopy;
    });
    setMovies(watchListedMovie);

    //Code for List addition
    //updateWatchlist contains movie with current add to watchlist clicked button
    const updateWatchList = movies.filter((movie) => movie.name === name);
    let watchListMoviesCopy = watchList;
    //To add the movie in watchlist
    //Returns true if movie is not in watchlist
    if (watchListMoviesCopy.some((watch) => watch.name === name) === false) {
      watchListMoviesCopy = watchListMoviesCopy.concat(updateWatchList);
      // console.log("in");
    } else {
      //to remove the movie from watchlist
      watchListMoviesCopy = watchListMoviesCopy.filter(
        (movie) => movie.name !== name
      );
      // console.log("out");
    }
    setwatchListMovies(watchListMoviesCopy);
  };

  return (
    <div className="container">
      <div className="movie">
        <h2>Movie List</h2>

        {movies.length > 0 && (
          <div>There are {movies.length} items in your list</div>
        )}
        {movies.length !== 0
          ? movies.map((movie) => (
              <Movie
                movie={getFormattedMovie(movie)}
                //Key is used in React in reconcealiation algorithm

                key={movie.name}
                onWatchList={handleWatchList}
                onLike={handleLike}
                onDelete={handleDelete}
              />
            ))
          : "There are no items in your list"}
      </div>
      <div className="WaitList">
        <h2>Watch List</h2>
        {watchList.length !== 0 ? (
          watchList.map((movie) => (
            <WatchList key={movie.name} name={movie.name} />
          ))
        ) : (
          <h3>No items in list</h3>
        )}
      </div>
    </div>
  );
}
