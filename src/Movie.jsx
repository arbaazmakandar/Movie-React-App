import React from "react";
import "./styles.css";
const redHeart = <i className="red-heart fas fa-heart"></i>;
const emptyHeart = <i className="far fa-heart"></i>;

export default function Movie(props) {
  const { movie, onDelete, onLike, onWatchList } = props;

  return (
    <>
      <div className="title">{movie.name}</div>
      <div>
        <span className="star">&#9733;</span>
        {movie.rating}
      </div>
      <div>Cast:- {movie.actors}</div>
      <div>Description:- {movie.description}</div>
      <div>{movie.liked ? redHeart : emptyHeart}</div>
      <button
        className={movie.watchList === "Add to watchlist" ? "green" : "red"}
        onClick={() => onWatchList(movie.name)}
      >
        {movie.watchList}
      </button>
      <button onClick={() => onLike(movie.name)}>Like</button>
      <button onClick={() => onDelete(movie.name)}>Delete</button>
    </>
  );
}
