import React from "react";
import Card from "./Card";

function Grid({ movies }) {
  return (
    <div className="row">
      {movies[0] ? (
        movies.map((movie) => <Card key={movie.id} movie={movie} />)
      ) : (
        <h1>No hay peliculas</h1>
      )}
    </div>
  );
}

export default Grid;
