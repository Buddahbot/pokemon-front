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
  const [gameCount, setGameCount] = useContext(GameContext);

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
      specialAttack: pokemon.base["Sp. Attack"],
      specialDefense: pokemon.base["Sp. Defense"],
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    });
  }, []);

  const countGames = () => {
    setGameCount((gameCount) => gameCount + 1);
    console.log(gameCount);
  };

  return (
    <>
      <div className="main-container">
        <div className="main-container-header">
          <h1>The Matchup:</h1>
        </div>

        <div className="poke-card">
          <div className="two-columns">
            <div className="poke-with-stats2">
              <h2 style={{ marginTop: "20px" }}>{player.nameEN}</h2>
              <h5 style={{ color: "#aaa" }}>You</h5>
              <img src={player.image} style={{ width: "300px" }} />
              <div className="player-stats">
                <p>Health:</p> <p className="stat">{player.hp}</p>
                <p>Attack:</p> <p className="stat">{player.attack}</p>
                <p>Defenses:</p> <p className="stat">{player.defense}</p>
                <p>Special Attack:</p>{" "}
                <p className="stat">{player.specialAttack}</p>
                <p>Special Defense:</p>{" "}
                <p className="stat">{player.specialDefense}</p>
              </div>
            </div>
            <div>
              <h3 style={{ transform: "translateY(30px)" }}>vs</h3>
            </div>
            <div className="poke-with-stats2">
              <h2 style={{ marginTop: "20px" }}>{comp.nameEN}</h2>
              <h5 style={{ color: "#aaa" }}>Computer</h5>
              <img src={comp.image} style={{ width: "300px" }} />
              <div className="player-stats">
                <p>Health:</p> <p className="stat">{comp.hp}</p>
                <p>Attack:</p> <p className="stat">{comp.attack}</p>
                <p>Defenses:</p> <p className="stat">{comp.defense}</p>
                <p>Special Attack:</p>{" "}
                <p className="stat">{comp.specialAttack}</p>
                <p>Special Defense:</p>{" "}
                <p className="stat">{comp.specialDefense}</p>
              </div>
            </div>
          </div>

          <div className="buttons-row">
            <Link to={`/pokemon/${player.id}`}>
              <button>Go back </button>
            </Link>
            <Link to={`/fightcode`}>
              <button onClick={countGames} className="button-green">
                GO TO FIGHT{" "}
              </button>
            </Link>
            <br />
            <Link to={`/fight2`}>
              <button onClick={countGames} className="button-green">
                FIGHT ALTERNATIVE{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Matchup;
