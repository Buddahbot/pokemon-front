import "../App.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import "../App.css";

const Matchup = (props) => {
  const [pokemons, setPokemons] = useContext(PokeContext);
  const [player, setPlayer] = useContext(PlayerContext);

  const { id } = useParams();
  const pokemon = pokemons[id];
  const computer = pokemons[Math.floor(Math.random() * pokemons.length) - 1];

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
      <h1>Matchup</h1>
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
          <Link to={`/fight`}>
            <button>Ready To Fight!! </button>
          </Link>{" "}
        </div>
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
          <Link to={`/fight`}>
            <button>Ready To Fight!! </button>
          </Link>{" "}
        </div>
      </>
    </>
  );
};

export default Matchup;
