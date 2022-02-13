import { useState, createContext } from "react";
import BG from "../images/bg0.jpg";
import BG1 from "../images/bg1.jpg";
import BG2 from "../images/bg3.jpg";
import BG3 from "../images/bg12.jpg";
import BG5 from "../images/Ybg5.png";

export const BgContext = createContext();

export const BgController = (props) => {
  const [background, setBackground] = useState(BG);

  const picArray = [BG, BG1, BG2, BG3, BG5];

  const randomPic = Math.floor(Math.random() * picArray.length);
  setBackground(picArray[randomPic]);

  return (
    <BgContext.Provider value={[background, setBackground]}>
      {props.children}
    </BgContext.Provider>
  );
};
