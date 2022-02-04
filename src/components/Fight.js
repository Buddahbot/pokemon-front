import "./fightStyle.css";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import BG from "../images/bg0.jpg";
import BG1 from "../images/bg1.jpg";
import BG2 from "../images/bg3.jpg";
import BG3 from "../images/bg12.jpg";
import BG4 from "../images/forest.jpg";
import BG5 from "../images/Ybg5.png";

const Fight = () => {
  const [pokemons, setPokemons] = useContext(PokeContext);


  const picArray = [BG, BG1, BG2, BG3, BG4, BG5];

  const randomPic = Math.floor(Math.random() * picArray.length);
  const selectedPicture = picArray[randomPic];

  const placeholder = pokemons[18];
  const placeholder2 = pokemons[11];

  const ID = placeholder.id;
  const ID2 = placeholder2.id;
  console.log(ID);
  const placeholderImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png`;
  const placeholderImage2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID2}.png`;

  return (
    <div style={{backgroundImage: `url(${selectedPicture})`}} className="bg">

        <h1 className="fight">POKE-FIGHT!</h1>
      
      <div className="fighters">
        <div className="leftFighter">

                  <h1 className="userName">User1</h1>
               
               <div className="imgLeft">
                   <img src={placeholderImage2} className="imgLeft-img"  />
                   </div>

                          <div className="pokeName">
                              <h3 >{placeholder2.name.english}</h3>
                          <h3 >{placeholder2.name.japanese}</h3>
                          </div>

      </div>
      <div className="rightFighter">

    <h1 className="userName">User2</h1>

    <div className="imgRight">
    <img src={placeholderImage}  className="imgRight-img" />
</div>
        <div className="pokeName">
            <h3 >{placeholder.name.english}</h3>
        <h3 >{placeholder.name.japanese}</h3>
        </div>

        
  </div>    
  </div>       
</div>
    
  );
};

export default Fight;
