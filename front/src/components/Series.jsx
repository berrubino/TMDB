import Card from "./Card";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, BASE_ROUTE, API_KEY } from "../ruta";
import Searcher from "./Searcher";
import useImput from "../hooks/useImput";

function Series() {
  const search = useImput();

  const [series, setSeries] = useState([]);

  const fetchSeries = (searchKey) => {
    const type = searchKey ? "search" : "discover";

    axios
      .get(`${BASE_URL}/${type}/tv`, {
        params: { api_key: API_KEY, query: searchKey },
      })
      .then((res) => {
        setSeries(res.data.results);
      });
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSeries(search.value);
  };

  return (
    <div>
      <Searcher search={search} handleSearch={handleSearch} />
      <div className="container">
        <div className="row">
          {series[0] ? (
            series.map((serie) => <Card key={serie.id} movie={serie} />)
          ) : (
            <h1>No hay series</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Series;
