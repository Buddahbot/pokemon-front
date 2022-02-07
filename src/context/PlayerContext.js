import { useState, createContext } from "react";

export const PlayerContext = createContext();

export const PlayerController = (props) => {
  const [player, setPlayer] = useState({});

  return (
    <PlayerContext.Provider value={[player, setPlayer]}>
      {props.children}
    </PlayerContext.Provider>
  );
};
