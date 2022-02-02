import "../App.css";
import { PokeContext } from "../context/PokeContext";
import { useState, useContext, useEffect } from "react";

const Home = () => {
  const [pokemons, setPokemons] = useContext(PokeContext);
  console.log(pokemons);
  return <></>;
};

export default Home;
