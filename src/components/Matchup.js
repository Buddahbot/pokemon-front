import "../App.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useCallback } from "react";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import { CompContext } from "../context/CompContext";
import { GameContext } from "../context/GameContext";
import "../App.css";

const Matchup = (props) => {
  const [pokemons, setPokemons] = useContext(PokeContext);
  const [player, setPlayer] = useContext(PlayerContext);
  const [comp, setComp] = useContext(CompContext);
  const [gameCount, setGameCount] = useContext(GameContext)

  // const { id } = useParams();

  const { id } = pokemons[Math.floor(Math.random() * pokemons.length) - 1];
  const pokemon = pokemons[id - 1];

  useEffect(() => {
    setComp({
      id: pokemon.id,
      nameEN: pokemon.name.english,
      nameJP: pokemon.name.japanese,
      type: pokemon.type[0],
      hp: pokemon.base.HP,
      attack: pokemon.base.Attack,
      defense: pokemon.base.Defense,
      spAttack: pokemon.base['Sp. Attack'],
      spDefense: pokemon.base['Sp. Defense'],
      speed: pokemon.base.Speed,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    });
  }, []);

  const countGames = () => {
    setGameCount(gameCount => gameCount + 1)
    console.log(gameCount)
  }

  

  // console.log(comp);
  // setPlayer({
  //   id: computer.id,
  //   nameEN: computer.name.english,
  //   nameJP: computer.name.japanese,
  //   type: computer.type[0],
  //   hp: computer.base.HP,
  //   attack: computer.base.Attack,
  //   defense: computer.base.Defense,
  //   image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
  // });

  return (
    <>
<div className="main-container">
        <div className="main-container-header">
          <h1>
            The Matchup:
          </h1>
        </div>

        <div className="poke-card">
          <div className="two-columns">
          <div className="poke-with-stats2">
            <h3>You picked:</h3>
          <img src={player.image} style={{ width: "300px" }} />
          <div className="player-stats">
          <p>Type:</p> <p className="stat">{player.type}</p>
            <p>Health Points:</p> <p className="stat">{player.hp}</p>
            <p>Attack Points:</p> <p className="stat">{player.attack}</p>
            <p>Defense Points:</p> <p className="stat">{player.defense}</p>
            <p>Special Attack Points:</p> <p className="stat">{player.spAttack}</p>
            <p>Special Defense Points:</p> <p className="stat">{player.spDefense}</p>
            <p>Speed:</p> <p className="stat">{player.speed}</p>
          </div>
          </div>
          
          <div className="poke-with-stats2">
          <h3>Computer picked:</h3>

          <img src={comp.image} style={{ width: "300px" }} />
          <div className="player-stats">
          <p>Type:</p> <p className="stat">{comp.type}</p>
            <p>Health Points:</p> <p className="stat">{comp.hp}</p>
            <p>Attack Points:</p> <p className="stat">{comp.attack}</p>
            <p>Defense Points:</p> <p className="stat">{comp.defense}</p>
            <p>Special Attack Points:</p> <p className="stat">{comp.spAttack}</p>
            <p>Special Defense Points:</p> <p className="stat">{comp.spDefense}</p>
            <p>Speed:</p> <p className="stat">{comp.speed}</p>
            
          </div>
          </div>
          </div>
       
          
          <div className="buttons-row">
          <Link to={`/`}>
            <button>Go back </button>
          </Link>
          <Link to={`/fightcode`}>
            <button onClick={countGames} className="button-green">GO TO FIGHT </button>
          </Link>
          </div>
      </div></div>
    </>
  );
};

export default Matchup;
