import "../App.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import "../App.css";

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
      <div className="fighter-containers">
        <div className="fighter-imageName">
          <h3>
            You picked:{player.nameEN} <br />
            {player.nameJP}
          </h3>

          <img src={player.image} style={{ width: "300px" }} />
        </div>
        <Link to={`/`}>
          <button>Go back </button>
        </Link>
        <Link to={`/matchup`}>
          <button>Choose fighter </button>
        </Link>
      </div>
    </>
  );
};

export default Fighter;
