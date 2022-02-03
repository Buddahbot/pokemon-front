import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { PokeContext } from "../context/PokeContext";
import "../App.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useContext(PokeContext);
  const [newPokemons, setnewPokemons] = useState([]);
  const [clicked, setClicked] = useState(false);

  const default20 = [];

  for (let i = 0; i < 21; i++) {
    default20.push(pokemons[i]);
  }

  const handleShuffle = (e) => {
    e.preventDefault();
    setClicked(true);
    console.log("yyy");
    var new20 = [];
    for (let i = 0; i < 21; i++) {
      new20.push(pokemons[Math.floor(Math.random() * pokemons.length)]);
    }
    console.log(new20);

    setnewPokemons(new20);
  };

  // const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png`;

  return (
    <div className="home-container">
      {/* <h1>PokemonList</h1> */}
      <button id="shuffleBtn" onClick={handleShuffle}>
        shuffle list
      </button>

      {clicked ? (
        <>
          {/* <h3>Default List</h3> */}
          <div className="poke-grid">
            {newPokemons.map((e) => {
              return (
                <Link to={`/pokemon/${e.id}`}>
                  <div className="grid-cell">
                    <br />
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`}
                      alt={e.name.english}
                    />
                    <h3>{e.name.english}</h3>
                    <p>
                      {e.name.japanese} {e.id}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <>
          {/* <h3>Default List</h3> */}
          <div className="poke-grid">
            {default20.map((e) => {
              return (
                <Link to={`/pokemon/${e.id}`}>
                  <div className="grid-cell">
                    <br />
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`}
                      alt={e.name.english}
                    />
                    <h3>{e.name.english}</h3>
                    <p>
                      {e.name.japanese} {e.id}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonList;
