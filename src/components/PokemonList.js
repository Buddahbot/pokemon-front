//old one : 

// import { Link } from "react-router-dom";
// import { useContext, useState, useEffect } from "react";
// import { PokeContext } from "../context/PokeContext";
// import { ShuffleContext } from "../context/ShuffleContext";
// import { ClickContext } from "../context/ClickContext";

// import "../App.css";

// const PokemonList = () => {
//   const [pokemons, setPokemons] = useContext(PokeContext);
//   const [clicked, setClicked] = useContext(ClickContext);
//   const [shuffle, setShuffle] = useContext(ShuffleContext);
//   const default20 = [];

//   const fav = [
//     25, 6, 133, 7, 130, 94, 144, 145, 146, 150, 123, 148, 65, 22, 143, 115, 3,
//     135, 89, 34, 12,
//   ];

//   for (let i = 0; i < fav.length; i++) {
//     default20.push(pokemons[fav[i] - 1]);
//   }
//   console.log(default20);

//   const handleShuffle = (e) => {
//     e.preventDefault();
//     setClicked(true);
//     let new20 = [];
//     for (let i = 0; i < 21; i++) {
//       new20.push(pokemons[Math.floor(Math.random() * pokemons.length)]);
//     }
//     setShuffle(new20);
//     console.log(shuffle);
//   };

//   return (
//     <div className="main-container">
//       <div className="main-container-header">
//         <h1>Choose your fighter:</h1>

//         <button id="shuffleBtn" onClick={handleShuffle}>
//           shuffle list
//         </button>
//       </div>

//       {!clicked ? (
//         <>
//           <div className="poke-grid">
//             {default20.map((e, index) => {
//               return (
//                 <a key={index}>
//                   <Link to={`/pokemon/${e.id}`}>
//                     <div className="grid-cell">
//                       <img
//                         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`}
//                         alt={e.name.english}
//                       />
//                       <h3>{e.name.english}</h3>
//                       <p>
//                         {e.name.japanese}
//                         {/* <br /> */}
//                         {/* {e.id} */}
//                       </p>
//                     </div>
//                   </Link>
//                 </a>
//               );
//             })}
//           </div>
//         </>
//       ) : (
//         shuffle && (
//           <>
//             <div className="poke-grid">
//               {shuffle.map((e) => {
//                 return (
//                   <a>
//                     <Link to={`/pokemon/${e.id}`}>
//                       <div className="grid-cell">
//                         {/* {e.id} */}
//                         <img
//                           src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`}
//                           alt={e.name.english}
//                         />
//                         <h3>{e.name.english}</h3>
//                         <p>{e.name.japanese}</p>
//                       </div>
//                     </Link>
//                   </a>
//                 );
//               })}
//             </div>
//           </>
//         )
//       )}
//     </div>
//   );
// };

// export default PokemonList;

// new code with search button:

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { PokeContext } from "../context/PokeContext";
import "../App.css";

const PokemonList = () => {
  const favoritePokemonNumbers = [25, 6, 133, 7, 130, 94, 144, 145, 146,
    150, 123, 148, 65, 22, 143, 115, 3,
    135, 89, 34, 12];

  const MAX_DISPLAYED = 20

  const [allPokemons] = useContext(PokeContext);
  const [displayedPokemons, setDisplayedPokemons] = useState(favoritePokemonNumbers.map(nr => allPokemons[nr - 1]));

  const handleSearch = (e) => {
    setDisplayedPokemons(
      [...allPokemons]
        .filter(pokemon => pokemon.name.english.toLowerCase().includes(e.target.value.toLowerCase()))
        .slice(0, MAX_DISPLAYED)
    )
  }

  const handleShuffle = (e) => {
    e.preventDefault();
    setDisplayedPokemons(
      [...allPokemons]
        .sort(() => 0.5 - Math.random())
        .slice(0, MAX_DISPLAYED));
  };

  return (
    <div className="main-container">
      <div className="main-container-header">
        <h1>Choose your fighter:</h1>

        <form className="form-inline my-2 my-lg-0" >
          <input className="form-control mr-sm-2 input-search" type="text" placeholder="Search Pokemons... " onChange={handleSearch} />
        </form>

        <button id="shuffleBtn" onClick={handleShuffle}>
          shuffle list
        </button>
      </div>



      <div className="poke-grid">
        {displayedPokemons.map((pokemon) => {
          return (
            <Link to={`/pokemon/${pokemon.id}`}>
              <div className="grid-cell">
                <br />
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  alt={pokemon.name.english}
                />
                <h3>{pokemon.name.english}</h3>
                <p>
                  {pokemon.name.japanese}
                  <br />
                  {pokemon.id}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
