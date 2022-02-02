import "../App.css";
import { PokeContext} from "../context/PokeContext";
 import {useState, useContext, useEffect} from 'react'

const Home = () => {
  const[pokemons, setPokemons] = useContext(PokeContext);


  return (
    <>
      <h2>Home</h2>
    </>
  );
};

export default Home;
