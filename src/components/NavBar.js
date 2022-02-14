import { Route, Routes, Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <>
      {/* <p>
        <i>Temporary Navbar (for navigation as we build the site):</i>
      </p> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pokemonlist">PokemonList</Link>
{/* 
        <Link to="/fighter">Fighter</Link>
        <Link to="/matchup">Matchup</Link>
        <Link to="/fight">Fight</Link>
        <Link to="/winner">Winner</Link> */}
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Register</Link>
      </nav>
    </>
  );
};

export default NavBar;
