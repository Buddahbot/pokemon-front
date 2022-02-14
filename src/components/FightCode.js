// import "../App.css";
import "./fightStyle.css";
import { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import { CompContext } from "../context/CompContext";
import { useEffect } from "react/cjs/react.development";
import { GameContext } from "../context/GameContext";
import { UserContext } from "../context/UserContext";
import { stats } from "../logic/boardFunction";
import BG from "../images/bg0.jpg";
import BG1 from "../images/bg1.jpg";
import BG2 from "../images/bg3.jpg";
import BG3 from "../images/bg12.jpg";
import BG5 from "../images/Ybg5.png";
import Explosion from "../images/boom2.gif";
import { BackgroundContext } from "../context/BackgroundContext";

const FightCode = () => {
  const [player, setPlayer] = useContext(PlayerContext);
  const [playerScore, setPlayerScore] = useContext(PlayerContext);
  const [pokemons, setPokemons] = useContext(PokeContext);
  const [healthpoints, setHealthpoints] = useState();
  const [comp, setComp] = useContext(CompContext);
  const [compScore, setCompScore] = useContext(CompContext);
  const [currentHpPlayer, setCurrentHpPlayer] = useState();
  const [currentHpComp, setCurrentHpComp] = useState();
  const [currentDefensePlayer, setCurrentDefensePlayer] = useState();
  const [currentDefenseComp, setCurrentDefenseComp] = useState();
  const [winCountPlayer, setWinCountPlayer] = useState(false);
  const [winCountComp, setWinCountComp] = useState(false);
  const [whoAttacks, setWhoAttacks] = useState();
  const [gameCount, setGameCount] = useContext(GameContext);
  const [fight, setFight] = useState(false);
  const [explosion, setExplosion] = useState(false);
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [bgPic, setBgPic] = useState("");
  const [currentRoundWinner, setCurrentRoundWinner] = useState({});
  const[winner, setWinner] = useState(true);
  
  
  let  navigate = useNavigate();
  useEffect(() => {
    setCurrentHpPlayer(player.hp);
    setCurrentHpComp(comp.hp);
    setCurrentDefensePlayer(player.defense);
    setCurrentDefenseComp(comp.defense);
    console.log(player)
  }, []);


  const codeLogic = () => {
    let attacker = Math.floor(Math.random() * 2 + 1);
    setWhoAttacks(attacker);
    if (attacker === 1 && player.attack > comp.defense) {
      //player 1 attacks and wins
      setCurrentDefenseComp(currentDefenseComp * 0.1);
      setCurrentRoundWinner(player);
    } else if (attacker === 1 && player.attack < comp.defense) {
      // player 1 attacks and loses
      setCurrentHpPlayer(currentHpPlayer * 0.1);
      setCurrentRoundWinner(comp);
    } else if (attacker === 2 && comp.attack > player.defense) {
      // player 2 attacks and wins
      setCurrentDefensePlayer(currentDefensePlayer * 0.1);
      setCurrentRoundWinner(comp);
    } else if (attacker === 2 && comp.attack < player.defense) {
      // player 2 attacks and loses
      setCurrentHpComp(currentHpComp * 0.1);
      setCurrentRoundWinner(player);
    }
    // else {
    //   const tryAgain = "No one wins this round. You are both so strong!!";
    //   console.log(tryAgain);
    // }
    // const setPlayerToZero = () => { // sets value to 0
    //   setCurrentDefensePlayer(0)
    //   setCurrentHpPlayer(0);
    //   setWinner(true)
    //   console.log(winner)
    // };
    // const setCompToZero = () => { // sets value to 0 
    //   setCurrentDefenseComp(0);
    //   setCurrentHpComp(0);
    //   setWinner(false)
    //   console.log(winner)
    // }

    // if (currentDefenseComp < 20) {
    //   setCompToZero();
    //   //setWinCountPlayer(true);
    // } else if (currentHpComp < 20) {
    //   setCompToZero();
    //   //setWinCountPlayer(true);
    // } else if (currentDefensePlayer < 20) {
    //   setPlayerToZero();
    //   //setWinCountComp(true);
    // } else if (currentHpPlayer < 20) {
    //   setPlayerToZero();
    // }
  };

  // console.log(currentDefenseComp)
  // console.log(currentHpComp)
  // console.log(currentDefensePlayer)
  // console.log(currentHpPlayer)
  
  // const getWinner = () => {
  //   if (currentHpPlayer === 0 || currentDefensePlayer === 0) {
  //     //computer won
  //     setPlayerScore(0);
  //     return winner;
  //   } else if (currentHpComp === 0 || currentDefenseComp === 0) {
  //     //player is winning
  //     setPlayerScore(1);
  //     return setWinner(true);
  //   } else {
  //     setPlayerScore(0);
  //     return setWinner(false);
  //   }
  // };

  useEffect(() => {
    //getWinner()
    const scores = {
      gamesWon: playerScore,
      gamesPlayed: gameCount,
    };
  
    stats(scores, userInfo.id).then((res) => {
      if (res) {
        if (winner) {
          navigate("/Winner");
        } else if (!winner) {
          navigate("/Loser");
        }
      }
    });
    
  }, [winner]);

  const handleExplo = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("here");
      setExplosion(true);
      navigate("/Winner")
    }, 10000);
    clearTimeout();
    
  };

  //set randomized background image:
  const picArray = [BG, BG1, BG2, BG3, BG5];

  useEffect(() => {
    const setPic = () => {
      let selectedPicture;
      const randomPic = Math.floor(Math.random() * picArray.length);
      selectedPicture = picArray[randomPic];
      setBgPic(selectedPicture);
    };
    setPic();
  }, []);

  return (
    <>
    {player && 
    <div style={{ backgroundImage: `url(${bgPic})` }} className="bg ">
      <div className="fightTitle-div">
        {fight && (
          <h1 className={`${fight ? "fightTitle" : ""}`}>POKE FIGHT!</h1>
        )}
      </div>

      <div className="whoAttacked">
        <h3 className="fight-message">
          <p>
            {whoAttacks === 1
              ? "You attack!"
              : whoAttacks === 2
              ? "Computer attacks you!"
              : "Ready To Rumble!"}
          </p>
        </h3>
      </div>

      <div style={{ color: "white" }} className="whoWon">
        {fight && explosion && (
          <h2>
            {currentRoundWinner === player
              ? "Player won"
              : currentRoundWinner === comp
              ? "Computer won"
              : ""}
          </h2>
        )}
      </div>

      {explosion && (
        <img src={Explosion} className={`${explosion ? "explosion" : ""}`} />
      )}

      {currentHpPlayer === 0
        ? navigate("/loser")
        : currentDefensePlayer === 0
        ? navigate("/loser")
        : currentHpComp === 0
        ? navigate("/winner")
        : currentDefenseComp === 0
        ? navigate("/winner")
        : ""}

      <div
        className="fighters"
        // style={{
        //   alignItems: "space-between",
        // }}
      >
        <div className="leftFighter">
          <div>
            <img
              src={player.image}
              className={`${fight ? "imgLeft" : "imgLeft-img"}`}
            />
          </div>
{/* <img onScroll={player.image} /> */}
          <div className="pokeName">
            <h3>{player.nameEN}</h3>
            <p>Health: {currentHpPlayer}</p>
            <p>Defense: {currentDefensePlayer}</p>
          </div>
        </div>

        <div className="buttons-fight-back">
          <div
            className="FightButton"
            onClick={(e) => {
              setFight(true);
              handleExplo(e);
              codeLogic();
            }}
          >
            FIGHT!
          </div>
          <br />
          {/* <button
            className="ResetButton"
            onClick={(e) => {
              setFight(false);
              setExplosion(false);
            }}
          >
            reset animation
          </button> */}
        </div>

        <div className="rightFighter">
          <div>
            <img
              src={comp.image}
              className={`${fight ? "imgRight" : "imgRight-img"}`}
            />
          </div>
          <div className="pokeName">
            <h3>{comp.nameEN}</h3>
            <p>Health: {currentHpComp}</p>
            <p>Defense: {currentDefenseComp}</p>
          </div>
        </div>
      </div>
    </div>
  }
    </>
  );
};

export default FightCode;
