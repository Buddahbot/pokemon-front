import "./App.css";

import Fight from "./components/Fight";
import Fighter from "./components/Fighter";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Matchup from "./components/Matchup";
import Winner from "./components/Winner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import FightCode from "./components/FightCode";
import Loser from './components/Loser'
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect, useParams } from "react";
import PokemonList from "./components/PokemonList";
import Register from "./components/Register";
import Login from "./components/Login";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/pokemonlist" element={<PokemonList />} />
        <Route exact path="/navbar" element={<NavBar />}></Route>
        {/* <Route exact path="/" element={<Home />}></Route>{" "} */}
        <Route exact path="/" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/pokemon/:id" element={<Fighter />}></Route>
        <Route exact path="/fightcode" element={<FightCode />}></Route>
        <Route exact path="/matchup" element={<Matchup />}></Route>
        <Route exact path="/fight" element={<Fight />}></Route>
        <Route exact path="/winner" element={<Winner/>}></Route>
        <Route exact path="/loser" element={<Loser />}></Route>
        <Route exact path="/leaderboard" element={<Leaderboard />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
