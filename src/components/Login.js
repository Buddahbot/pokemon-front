import React, { useState } from "react";
import { login } from "../logic/UserFunctions";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const testLogin = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      password: password,
    };

    login(user).then((res) => {
      if (res) {
        navigate("/pokemonlist");
      }
    });
  };

  return (
    <>
      <div className="main-container">
        <div className="poke-card">
          <h2>Login:</h2>
          <h3>Sign in to fight!</h3>
          <form onSubmit={testLogin}>
            <input
              type="text"
              placeholder="enter Playername"
              value={name}
              name="Playername"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              placeholder="enter password"
              value={password}
              type="password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>{" "}
      </div>
    </>
  );
};

export default Login;
