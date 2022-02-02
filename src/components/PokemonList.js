import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { PokeContext } from "../context/PokeContext";
import "../App.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useContext(PokeContext);
  const [newPokemons, setnewPokemons] = useState([]);
  const [clicked, setClicked] = useState(false);

  const default20 = [];

  for (let i = 0; i < 20; i++) {
    default20.push(pokemons[i]);
  }

  const handleShuffle = (e) => {
    e.preventDefault();
    setClicked(true);
    console.log("yyy");
    var new20 = [];
    for (let i = 0; i < 20; i++) {
      new20.push(pokemons[Math.floor(Math.random() * pokemons.length)]);
    }
    console.log(new20);

    setnewPokemons(new20);
  };

  return (
    <div>
      <h1>PokemonList</h1>
      <button onClick={handleShuffle}>shuffle list</button>
      {clicked ? (
        <>
          <h3>New Random List</h3>
          <p>
            {newPokemons.map((e) => {
              return <p>{e.name.english}</p>;
            })}
          </p>
        </>
      ) : (
        <>
          <h3>Default List</h3>
          <p>
            {default20.map((e) => {
              return <p>{e.name.english}</p>;
            })}
          </p>
        </>
      )}
    </div>
  );
};

export default PokemonList;
