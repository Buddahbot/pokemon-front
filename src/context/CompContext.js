import {  useState, createContext } from "react";

export const CompContext = createContext();

export const CompController = (props) => {
  const [comp, setComp] = useState({});

  return (
    <CompContext.Provider value={[comp, setComp]}>
      {props.children}
    </CompContext.Provider>
  );
};