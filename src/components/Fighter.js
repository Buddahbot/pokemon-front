import "../App.css";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import "../App.css";

const Fighter = () => {
  const [pokemons, setPokemons] = useContext(PokeContext);
  const { id } = useParams();
  console.log(id);
  // const pokemon = pokemons.find((e) => e.id === id);

  const pokemon = pokemons[id - 1];
  const ID = pokemon.id;
  console.log(ID);
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  // console.log("pokemon FIGHTER: " + pokemon);
  return (
    <>
      <div className="fighter-containers">
        <div className="fighter-imageName">
          <h3>
            You picked:{pokemon.name.english} <br />
            {pokemon.name.japanese}
          </h3>
          <img src={pokemonImage} style={{ width: "300px" }} />

          <div className="bio-container">
            <h3>{pokemon.type[0]}</h3>
            <h3>{pokemon.base.HP}</h3>
            Stats: Attack {pokemon.base.Attack} Defense: {pokemon.base.Defense}{" "}
            Sp. Attack{pokemon.base.Sp.Attack} Speed:{pokemon.base.Speed}
          </div>
        </div>
      </div>
      <p></p>

      <h3></h3>
    </>
  );
};

export default Fighter;
