import { Link } from "react-router-dom";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";

const PokemonList = () => {
    const [pokemons, setPokemons] = useContext(PokeContext)
    console.log(pokemons);
    return (
    <div>
        <h1>hello</h1>
    </div>
    );
};

export default PokemonList;