import React, { useContext } from "react";
import axios from "axios";
import useImput from "../hooks/useImput";
import { BASE_ROUTE } from "../ruta";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

function Login() {
  const user = useImput();
  const password = useImput();
  const usuario = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_ROUTE}/api/users/login`,
        {
          user: user.value,
          password: password.value,
        },
        { withCredentials: true }
      )
      .then((user) => {
        usuario.logUser(user.data);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <div className="rounded-md shadow-sm">
        <div>
          <input
            aria-label="usuario"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Usuario"
            {...user}
          />
        </div>
        <br></br>
        <div className="-mt-px">
          <input
            name="password"
            aria-label="Password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Password"
            {...password}
          />
        </div>
        <br></br>
      </div>
      <br></br>
      <div className="mt-6">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-fuchsia-500 hover:bg-pink-500 focus:outline-none focus:border-pink-200 focus:shadow-outline-indigo transition duration-150 ease-in-out"
        >
          Ingresar
        </button>
      </div>
    </form>
  );
}

export default Login;
