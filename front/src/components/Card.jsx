import React from "react";

function Card({ movie }) {
  const URL_IMG = "https://image.tmdb.org/t/p/original";

  return (
    <div className="col-md-4 mb-3">
      <img src={`${URL_IMG + movie.poster_path}`} alt="" height={600} />
      <h4>{movie.title}</h4>
    </div>
  );
}

export default Card;
