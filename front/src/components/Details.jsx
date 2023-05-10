import { React, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, BASE_ROUTE, API_KEY } from "../ruta";
import { useParams } from "react-router";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const URL_IMG = "https://image.tmdb.org/t/p/original";

  const description = () => {
    axios
      .get(`${BASE_URL}/movie/${id}`, {
        params: { api_key: API_KEY, query: id },
      })
      .then((movie) => movie.data)
      .then((data) => setData(data));
  };

  /*   function getGenres() {
    const generos = [];
    for (const genero of data.genres) {
      generos.push(genero.name + " ");
    }
    return generos;
  } */

  useEffect(() => {
    description();
  }, []);

  return (
    <div>
      <h1>{data.original_title}</h1>
      {data.poster_path ? (
        <img src={`${URL_IMG + data.poster_path}`} alt="" height={600} />
      ) : (
        "no image found"
      )}
      <p>{data.overview}</p>
      <p>year:{data.release_date}</p>
      <p>minutes:{data.runtime}</p>
      <p>langage:{data.original_language}</p>
      {/*       <p>genres:</p>
      {<p>{getGenres()}</p>} */}
    </div>
  );
}

export default Details;
