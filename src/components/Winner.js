import "./winnerStyle.css";
import { useContext, useState, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import { CompContext } from "../context/CompContext";
import party from "party-js";
import { NavLink } from "react-router-dom";

const Winner = () => {
  const [pokemons, setPokemons] = useContext(PokeContext);
  const [player, setPlayer] = useContext(PlayerContext);



  const placeholder = pokemons[11];

  const ID = placeholder.id;

  console.log(ID);
  const placeholderImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png`;

  const onClick = () => {
    party.confetti(document.body, {
      count: party.variation.range(10, 200),
    });
  };

  return (
    <div className="container-winner ">
      <div className="buttons">
        <NavLink className="button" to="/leaderboard">Leaderboard</NavLink>
      </div>

      <div class="waviy">
        <span className="--i:2">W</span>
        <span className="--i:3">I</span>
        <span className="--i:4">N</span>
        <span className="--i:5">N</span>
        <span className="--i:6">E</span>
        <span className="--i:7">R</span>
      </div>

      <div className="winnerPoke">

        <div className="">
          <img src={player.image} className="img" />
        </div>

        <button className="button" onClick={onClick}>Click me!</button>

        <div className="playAgainButton">
          <NavLink className="button" to="/pokemonlist">PLAY AGAIN</NavLink>
        </div>

        <div className="info">
          <div className="pokeNames">
            <h3 >{player.nameEN}</h3>
            <h4 >{player.nameJP}</h4>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Winner;
