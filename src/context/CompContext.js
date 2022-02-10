import { useState, createContext } from "react";

export const CompContext = createContext();

export const CompController = (props) => {
  const [comp, setComp] = useState({});
  const [compScore, setCompScore] = useState(0);

  return (
    <CompContext.Provider value={[comp, setComp, compScore, setCompScore]}>
      {props.children}
    </CompContext.Provider>
  );
};
