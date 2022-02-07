import { useState, createContext, useEffect } from "react";

export const ClickContext = createContext();

export const ClickController = (props) => {
  const [click, setClick] = useState(false);

  return (
    <ClickContext.Provider value={[click, setClick]}>
      {props.children}
    </ClickContext.Provider>
  );
};
