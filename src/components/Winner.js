import "./winnerStyle.css";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import party from "party-js";
import {NavLink} from 'react-router-dom' 

const Winner = () => {

  const [pokemons, setPokemons] = useContext(PokeContext);

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
    <div className="container ">
      <div className="buttons">
            <NavLink className="button" to="/leaderboard">Leaderboard</NavLink>
      </div>
        
          <h2>WINNER</h2>

       <div className="winnerPoke">

                <div className="">
                <img src={placeholderImage} className="img"/>
                </div>

          <button className="button" onClick={onClick}>Click me!</button>

          <div className="playAgainButton">
            <NavLink className="button" to="/">PLAY AGAIN</NavLink>
          </div>

          <div className="info">
          <div className="pokeNames">
              <h3 >{placeholder.name.english}</h3>
                <h3 >{placeholder.name.japanese}</h3>
          </div>
          </div>

      </div>
    </div>
  );
};

export default Winner;
