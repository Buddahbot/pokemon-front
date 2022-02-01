import "./App.css";

import Fight from "./components/Fight";
import Fighter from "./components/Fighter";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Matchup from "./components/Matchup";
import Winner from "./components/Winner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect, useParams } from "react";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>{" "}
        <Route exact path="/fighter" element={<Fighter />}></Route>
        <Route exact path="/matchup" element={<Matchup />}></Route>
        <Route exact path="/fight" element={<Fight />}></Route>
        <Route exact path="/winner" element={<Winner />}></Route>
        <Route exact path="/leaderboard" element={<Leaderboard />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
