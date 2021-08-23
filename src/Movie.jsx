import React from "react";
import "./styles.css";
const redHeart = <i className="red-heart fas fa-heart"></i>;
const emptyHeart = <i className="far fa-heart"></i>;
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function Movie(props) {
  const { movie, onDelete, onLike, onWatchList } = props;

  return (
    <div className="movie">
      <div className="title">{movie.name}</div>
      <div>
        <span className="star">&#9733;</span>
        {movie.rating}
      </div>
      <div>Cast:- {movie.actors}</div>
      <div>Description:- {movie.description}</div>
      <div>
        {movie.liked ? (
          <FaHeart className="red-heart" onClick={() => onLike(movie.name)}>
            Like
          </FaHeart>
        ) : (
          <FiHeart onClick={() => onLike(movie.name)}>Like</FiHeart>
        )}
      </div>

      <button
        className={movie.watchList ? "red" : "green"}
        onClick={() => onWatchList(movie.name)}
      >
        {movie.watchList ? "Remove from Watchlist" : "Add to watchlist"}
      </button>
      <button onClick={() => onDelete(movie.name)}>Delete</button>
    </div>
  );
}
