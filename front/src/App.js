import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Details from "./components/Details";
import Series from "./components/Series";
import axios from "axios";
import { Route, Routes } from "react-router";
import { useContext, useEffect } from "react";
import { BASE_ROUTE } from "./ruta";
import { AuthContext } from "./context/AuthContext";
import Logout from "./components/Logout";
import Trending from "./components/Trending";

function App() {
  const { logUser } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${BASE_ROUTE}/api/users/me`, { withCredentials: true })
      .then((resp) => logUser(resp.data.user));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvShows" element={<Series />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/" element={<Trending />} />
      </Routes>
    </div>
  );
}

export default App;
