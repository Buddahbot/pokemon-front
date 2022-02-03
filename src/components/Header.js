import "../App.css";
import Logo from "../images/logo.png";

import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <NavBar />
      {/* <h1>POKE-FIGHT!</h1> */}
      <img src={Logo} className="logo" />
    </>
  );
};

export default Header;
