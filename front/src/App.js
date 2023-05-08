import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Searcher from "./components/Searcher";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

function App() {
  const baseURL = "https://api.themoviedb.org/3";
  const APIkey = "2a3581a1386fcacdb3ba3949c96029f6";

  const [movies, setMovies] = useState([]);

  const fetchMovies = (searchKey) => {
    const type = searchKey ? "search" : "discover";

    axios
      .get(`${baseURL}/${type}/movie`, {
        params: { api_key: APIkey, query: type },
      })
      .then((res) => {
        console.log(res);
        setMovies(res.data.results);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Searcher />

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Grid movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
