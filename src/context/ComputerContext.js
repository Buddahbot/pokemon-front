import { useState, createContext } from "react";

export const ComputerContext = createContext();

export const ComputerController = (props) => {
  const [computer, setComputer] = useState(false);

  return (
    <ComputerContext.Provider value={[computer, setComputer]}>
      {props.children}
    </ComputerContext.Provider>
  );
};
