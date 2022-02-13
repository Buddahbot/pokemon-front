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
  console.log(pokemon);

  useEffect(() => {
    setPlayer({
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
            <p>Type:</p> <p className="stat">{player.type}</p>
            <p>Health Points:</p> <p className="stat">{player.hp}</p>
            <p>Attack Points:</p> <p className="stat">{player.attack}</p>
            <p>Defense Points:</p> <p className="stat">{player.defense}</p>
            <p>Special Attack Points:</p> <p className="stat">{player.spAttack}</p>
            <p>Special Defense Points:</p> <p className="stat">{player.spDefense}</p>
            <p>Speed:</p> <p className="stat">{player.speed}</p>
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
