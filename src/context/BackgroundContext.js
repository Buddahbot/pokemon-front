import { useState, createContext } from "react";
import BG from "../images/bg0.jpg";
import BG1 from "../images/bg1.jpg";
import BG2 from "../images/bg3.jpg";
import BG3 from "../images/bg12.jpg";
import BG5 from "../images/Ybg5.png";

export const BackgroundContext = createContext(BG);

export const BackgroundController = (props) => {
  const [background, setBackground] = useState(BG);

  // const picArray = [BG, BG1, BG2, BG3, BG5];

  // const randomPic = Math.floor(Math.random() * picArray.length);
  // setBackground(picArray[randomPic]);

  return (
    <BackgroundContext.Provider value={[background, setBackground]}>
      {props.children}
    </BackgroundContext.Provider>
  );
};

// import { useState, createContext } from "react";

// export const CompContext = createContext();

// export const CompController = (props) => {
//   const [comp, setComp] = useState({});
//   const [compScore, setCompScore] = useState(0);

//   return (
//     <CompContext.Provider value={[comp, setComp, compScore, setCompScore]}>
//       {props.children}
//     </CompContext.Provider>
//   );
// };
