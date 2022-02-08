import "../App.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import { CompContext } from "../context/CompContext";
import "../App.css";

const Matchup = (props) => {
  const [pokemons, setPokemons] = useContext(PokeContext);
  const [player, setPlayer] = useContext(PlayerContext);
  const [comp, setComp] = useContext(CompContext);

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
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    });
  }, []);

  console.log(comp);
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
      {/* <h1>Matchup</h1> */}
      <div className="matchup-main">
        <div className="fighter-containers">
          <div className="fighter-imageName">
            <h3>You picked:</h3>
            <h2>{player.nameEN}</h2> <br />
            <h4>{player.nameJP}</h4>
            <img src={player.image} style={{ width: "300px" }} />
          </div>
        </div>
        <div className="fighter-containers">
          <div className="fighter-imageName">
            <h3>
              Computer picked: {comp.nameEN} <br />
              {comp.nameJP}
            </h3>
            <img src={comp.image} style={{ width: "300px" }} />
          </div>
        </div>
      </div>
      <div className="bottom-buttons">
        <Link to={`/`}>
          <button>Go back </button>
        </Link>
        <Link to={`/fightcode`}>
          <button>Ready To Fight!! </button>
        </Link>{" "}
      </div>
    </>
  );
};

export default Matchup;
