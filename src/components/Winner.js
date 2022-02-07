import "./winnerStyle.css";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import party from "party-js";

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
    
      <h2>Winner</h2>

      <div className="winnerPoke">

            <div className="">
            <img src={placeholderImage} className="img"/>
            </div>

            <button onClick={onClick}>Click me!</button>

        <div className="pokeName">
            <h3 >{placeholder.name.english}</h3>
        <h3 >{placeholder.name.japanese}</h3>
        </div>

</div>
    </div>
  );
};

export default Winner;
