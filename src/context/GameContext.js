import { useState, createContext } from "react";

export const GameContext = createContext();

export const GameController = (props) => {
  const [gameCount, setGameCount] = useState(1)

  return (
    <GameContext.Provider value={[gameCount, setGameCount]}>
      {props.children}
    </GameContext.Provider>
  );
};