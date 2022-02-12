import "../App.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";

const Fighter = () => {
  const [pokemons, setPokemons] = useContext(PokeContext);
  const [player, setPlayer] = useContext(PlayerContext);

  const { id } = useParams();
  const pokemon = pokemons[id - 1];

  useEffect(() => {
    setPlayer({
      id: pokemon.id,
      nameEN: pokemon.name.english,
      nameJP: pokemon.name.japanese,
      type: pokemon.type[0],
      hp: pokemon.base.HP,
      attack: pokemon.base.Attack,
      defense: pokemon.base.Defense,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    });
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-container-header">
          <h1>
            You picked: <span style={{ color: "yellow" }}>{player.nameEN}</span>
          </h1>
        </div>

        <div className="poke-card">
          <div className="poke-with-stats">
          <img src={player.image} style={{ width: "300px" }} />
          <div className="player-stats">
            <p>Health Points:</p> <p className="stat">{player.hp}</p>
            <p>Attack Points:</p> <p className="stat">{player.attack}</p>
            <p>Defense Points:</p> <p className="stat">{player.defense}</p>
            {/* <p>Special Attack Points:</p> <p className="stat">{player["Sp. attack"]}</p> */}
            {/* <p>Special Defense Points:</p> <p className="stat">{player.}</p> */}
          </div>
          </div>
          <div className="buttons-row">
          <Link to={`/`}>
            <button>Go back </button>
          </Link>
          <Link to={`/matchup`}>
            <button className="button-green">Choose fighter </button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fighter;
