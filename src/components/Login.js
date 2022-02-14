import React, { useState } from "react";
import { login } from "../logic/UserFunctions";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // this is a usability feature that confirms to the user that they have logged in:
  const [confirmation, setConfirmation] = useState("");

  let navigate = useNavigate();

  const testLogin = (e) => {
    e.preventDefault();
    console.log("login triggered");
    const user = {
      name: name,
      password: password,
    };

    login(user).then((res) => {
      if (res) {
        console.log("navigating now...");
        navigate("/pokemonlist");
      }
    });
  };

  return (
    <>
      <div className="main-container">
        <div className="poke-card">
          <h2>Login:</h2>
          <form onSubmit={testLogin}>
            <input
              className="form-control mr-sm-2 input-search"
              type="text"
              placeholder="enter playername"
              value={name}
              name="Playername"
              onChange={(e) => setName(e.target.value)}
            ></input>

            <input
              className="form-control mr-sm-2 input-search"
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
