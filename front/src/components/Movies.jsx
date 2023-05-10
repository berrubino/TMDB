import Card from "./Card";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, BASE_ROUTE, API_KEY } from "../ruta";
import Searcher from "./Searcher";
import useImput from "../hooks/useImput";

function Movies() {
  const search = useImput();

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const fetchMovies = (searchKey) => {
    const type = searchKey ? "search" : "discover";

    axios
      .get(`${BASE_URL}/${type}/movie`, {
        params: { api_key: API_KEY, query: searchKey },
      })
      .then((res) => {
        setMovies(res.data.results);
      });
  };

  const fetchSeries = (searchKey) => {
    const type = searchKey ? "search" : "discover";

    axios
      .get(`${BASE_URL}/${type}/tv`, {
        params: { api_key: API_KEY, query: searchKey },
      })
      .then((res) => {
        setMovies(res.data.results);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(search.value);
  };

  return (
    <div>
      <Searcher search={search} handleSearch={handleSearch} />
      <div className="container">
        <div className="row">
          {movies[0] ? (
            movies.map((movie) => <Card key={movie.id} movie={movie} />)
          ) : (
            <h1>No hay peliculas</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Movies;
