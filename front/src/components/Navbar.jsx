import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { name } = useContext(AuthContext);

  console.log("name", name);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/movies">
        <button>Peliculas</button>
      </Link>
      <Link to="/tvShows">
        <button>ProgramasTv</button>
      </Link>
      {name ? (
        ""
      ) : (
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
      )}

      <Link to="/signup">
        <button>SIGN UP</button>
      </Link>
    </nav>
  );
}

export default Navbar;
