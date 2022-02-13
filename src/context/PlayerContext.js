import { useState, createContext } from "react";

export const PlayerContext = createContext();

export const PlayerController = (props) => {
  const [player, setPlayer] = useState({});
  const [playerScore, setPlayerScore] = useState(0);
  

  return (
    <PlayerContext.Provider
      value={[player, setPlayer, playerScore, setPlayerScore]}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
