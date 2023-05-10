import React from "react";
import { Link } from "react-router-dom";

function Card({ movie }) {
  const URL_IMG = "https://image.tmdb.org/t/p/original";

  return (
    <div className="col">
      <Link to={`/details/${movie.id}`}>
        <h3>{movie.original_title || movie.name}</h3>
        {movie.poster_path ? (
          <img src={`${URL_IMG + movie.poster_path}`} alt="" height={600} />
        ) : (
          "no image found"
        )}
      </Link>
    </div>
  );
}

export default Card;
