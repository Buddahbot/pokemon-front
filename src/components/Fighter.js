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
          <img src={player.image} style={{ width: "300px" }} />
          <div className="player-stats">
            <h3>Health Points xxx</h3>
            <h3>Attack Points: xxx</h3>
            <h3>Defense Points: xxx</h3>
            <h3>Special Attack Points: xxx</h3>
            <h3>Special Defense Points: xxx</h3>
          </div>
          <Link to={`/`}>
            <button>Go back </button>
          </Link>
          <Link to={`/matchup`}>
            <button className="button-green">Choose fighter </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Fighter;
