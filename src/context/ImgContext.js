import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ImgContext = createContext();

export const ImgController = (props) => {
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImgs = async () => {
    try {
      await axios
        .get(
          "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
        )
        .then((res) => {
          setImgs(res.data);
          setImgs(res.data);
        });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchImgs();
  }, []);

  return (
    <ImgContext.Provider value={[imgs, setImgs]}>
      {!loading && props.children}
    </ImgContext.Provider>
  );
};
