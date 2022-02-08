import "../App.css";
import Logo from "../images/logo.png";

import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <NavBar />

      {/* <h1>POKE-FIGHT!</h1> */}
      <img src={Logo} className="logo" />
    </header>
  );
};

export default Header;
