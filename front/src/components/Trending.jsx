import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { API_KEY, BASE_URL } from "../ruta";
import Card from "./Card";

function Trending() {
  const [trending, setTrending] = useState([]);
  const { name } = useContext(AuthContext);

  const fetchTrending = () => {
    axios
      .get(`${BASE_URL}/trending/all/week`, {
        params: { api_key: API_KEY, query: "trending" },
      })
      .then((resp) => setTrending(resp.data.results));
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <h1>bienvenido {name} a TMDB</h1>
      <div className="container">
        <div className="row">
          {trending[0] ? (
            trending.map((trend) => <Card key={trend.id} movie={trend} />)
          ) : (
            <h1>No se encontraron tendencias esta semana</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trending;
