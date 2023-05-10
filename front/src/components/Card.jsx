import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_ROUTE, BASE_URL, API_KEY } from "../ruta";

function Card({ movie }) {
  const URL_IMG = "https://image.tmdb.org/t/p/original";

  const handleFavorites = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_ROUTE}/api/favorites`)
      .then((resp) => console.log(resp))
      .catch((error) => console.error(error));
  };

  return (
    <div className="col">
      <button onClick={handleFavorites}>add to favorites</button>
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
