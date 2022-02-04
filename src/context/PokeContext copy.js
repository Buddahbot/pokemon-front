
import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const PokeContext = createContext();

export const PokeController = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      await axios
        .get(
          "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json?limit=100"
        )
        .then((res) => {
          setPokemons(res.data);
          setPokemons(res.data);
        });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokeContext.Provider value={[pokemons, setPokemons]}>
      {!loading && props.children}
    </PokeContext.Provider>
  );
};
