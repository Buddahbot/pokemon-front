import "../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import "../App.css";

const Fighter = () => {
  const [pokemons, setPokemons] = useContext(PokeContext);

  const placeholder = pokemons[10];
  const ID = placeholder.id;
  console.log(ID);
  const placeholderImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png`;

  // console.log("PLACEHOLDER FIGHTER: " + placeholder);
  return (
    <>
      <h2>Fighter</h2>
      <img src={placeholderImage} style={{ width: "300px" }} />
      <h3>{placeholder.name.english}</h3>
      <p>{placeholder.name.japanese}</p>

      <h3></h3>
    </>
  );
};

export default Fighter;
