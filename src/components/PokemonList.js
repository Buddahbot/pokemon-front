import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import { ShuffleContext } from "../context/ShuffleContext";
import { ClickContext } from "../context/ClickContext";
import "../App.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useContext(PokeContext);
  //const [newPokemons, setnewPokemons] = useState([]);
  const [clicked, setClicked] = useContext(ClickContext);
  const [shuffle, setShuffle] = useContext(ShuffleContext);
  const default20 = [];

  const fav = [25, 6, 133, 7, 130, 94, 144, 145, 146,
              150, 123, 148, 65, 22, 143, 115, 3,
              135, 89, 34, 12];

  let newNum = [];
  newNum = fav.map((e) => parseInt(e) - 1);
  //console.log(newNum[0]);

  for (let i = 0; i < newNum.length; i++) {
    default20.push(pokemons[newNum[i]-1])
  }
  console.log(default20)

  const handleShuffle = (e) => {
    e.preventDefault();
    setClicked(true);
    let new20 = [];
    for (let i = 0; i < 21; i++) {
      new20.push(pokemons[Math.floor(Math.random() * pokemons.length)]);
    }
    setShuffle(new20);
    console.log(shuffle);
  };

  // const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png`;

  return (
    <div className="home-container">
      {/* <h1>PokemonList</h1> */}
      <button id="shuffleBtn" onClick={handleShuffle}>
        shuffle list
      </button>
      {!clicked ? (
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
                      {e.name.japanese}
                      <br />
                      {e.id}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        shuffle && (
          <>
            {/* <h3>Default List</h3> */}
            <div className="poke-grid">
              {shuffle.map((e) => {
                return (
                  <Link to={`/pokemon/${e.id}`}>
                    <div className="grid-cell">
                      <br />
                      {e.id}
                      <br />
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`}
                        alt={e.name.english}
                      />
                      <h3>{e.name.english}</h3>
                      <p>{e.name.japanese}</p>
                      <br />
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default PokemonList;
