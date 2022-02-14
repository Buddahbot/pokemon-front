import React, { useState } from "react";
import { register } from "../logic/UserFunctions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {
      // creates new object with name,email, password
      name: name, // using useStates
      password: password,
    };

    register(newUser).then((res) => {
      // calls the register function from UserFunctions.js and passes newUser as argument
      navigate("/pokemonlist"); // then navigates to login
    });
  };

  return (
    <>
      <div className="main-container">
        <div className="poke-card">
          <h2>Register:</h2>
          {/* <h3>Sign up to fight!</h3> */}
          <form onSubmit={createUser}>
            <input
              className="form-control mr-sm-2 input-search"
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
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
