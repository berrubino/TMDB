import React from "react";
import axios from "axios";
import useImput from "../hooks/useImput";
import { BASE_ROUTE } from "../ruta";

function SignUp() {
  const user = useImput();
  const password = useImput();
  const email = useImput();
  const nacionalidad = useImput();
  const edad = useImput();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_ROUTE}/api/users/signup`, {
        user: user.value,
        password: password.value,
        email: email.value,
        nacionalidad: nacionalidad.value,
        edad: edad.value,
      })
      .then((resp) => resp)
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <label>
        Usuario:
        <input {...user} type="text" name="usuario" />
      </label>
      <br></br>
      <br></br>
      <label>
        Password:
        <input {...password} type="password" name="password" />
      </label>
      <br></br>
      <br></br>
      <label>
        Email:
        <input {...email} type="email" name="email" />
      </label>
      <br></br>
      <br></br>
      <label>
        Nacionalidad:
        <input {...nacionalidad} type="text" name="nacionalidad" />
      </label>
      <br></br>
      <br></br>
      <label>
        Edad:
        <input {...edad} type="number" name="edad" />
      </label>
      <br></br>
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SignUp;
