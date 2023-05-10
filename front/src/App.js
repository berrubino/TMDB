import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Details from "./components/Details";
import { Route, Routes } from "react-router";
import { useContext, useEffect } from "react";
import axios from "axios";
import { BASE_ROUTE } from "./ruta";
import { AuthContext } from "./context/AuthContext";
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
