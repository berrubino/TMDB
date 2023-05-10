import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_ROUTE } from "../ruta";
import axios from "axios";

function Navbar() {
  const { name, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOut = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_ROUTE}/api/users/logout`)
      .then((resp) => {
        logOut(resp.data);
        navigate("/logout");
      })
      .catch((error) => console.error(error));
  };

  console.log("name", name);
  return (
    <nav>
      {name ? (
        <div>
          <Link to="/logout">
            <button onClick={handleOut}>LOGOUT</button>
          </Link>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/movies">
            <button>Peliculas</button>
          </Link>
          <Link to="/tvShows">
            <button>ProgramasTv</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
          <Link to="/signup">
            <button>SIGN UP</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
