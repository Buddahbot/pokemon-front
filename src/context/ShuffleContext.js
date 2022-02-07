import { useState, createContext, useEffect } from "react";

export const ShuffleContext = createContext();

export const ShuffleController = (props) => {
  const [shuffle, setShuffle] = useState([]);

  return (
    <ShuffleContext.Provider value={[shuffle, setShuffle]}>
      {props.children}
    </ShuffleContext.Provider>
  );
};
