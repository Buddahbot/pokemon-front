// import "../App.css";
import "./fightStyle.css";
import { useContext, useState } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
import { PlayerContext } from "../context/PlayerContext";
import { CompContext } from "../context/CompContext";
import { useEffect } from "react/cjs/react.development";
import { GameContext } from "../context/GameContext";
import BG from "../images/bg0.jpg";
import BG1 from "../images/bg1.jpg";
import BG2 from "../images/bg3.jpg";
import BG3 from "../images/bg12.jpg";
import BG5 from "../images/Ybg5.png";
import Explosion from "../images/boom2.gif";

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

  const [currentRoundWinner, setCurrentRoundWinner] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    setCurrentHpPlayer(player.hp);
    setCurrentHpComp(comp.hp);
    setCurrentDefensePlayer(player.defense);
    setCurrentDefenseComp(comp.defense);
  }, []);

  const codeLogic = () => {
    let attacker = Math.floor(Math.random() * 2 + 1);
    setWhoAttacks(attacker);
    if (attacker === 1 && player.attack > comp.defense) {
      //player 1 attacks and wins
      setCurrentDefenseComp(currentDefenseComp * 0.5);
      setCurrentRoundWinner(player);
    } else if (attacker === 1 && player.attack < comp.defense) {
      // player 1 attacks and loses
      setCurrentHpPlayer(currentHpPlayer * 0.5);
      setCurrentRoundWinner(comp);
    } else if (attacker === 2 && comp.attack > player.defense) {
      // player 2 attacks and wins
      setCurrentDefensePlayer(currentDefensePlayer * 0.5);
      setCurrentRoundWinner(comp);
    } else if (attacker === 2 && comp.attack < player.defense) {
      // player 2 attacks and loses
      setCurrentHpComp(currentHpComp * 0.5);
      setCurrentRoundWinner(player);
    } else {
      const tryAgain = "No one wins this round. You are both so strong!!";
      console.log(tryAgain);
    }

    if (currentDefenseComp < 20) {
      setCurrentDefenseComp(0);
      setWinCountPlayer(true);
    } else if (currentHpComp < 20) {
      setCurrentHpComp(0);
      setWinCountPlayer(true);
    } else if (currentDefensePlayer < 20) {
      setCurrentDefensePlayer(0);
      setWinCountComp(true);
    } else if (currentHpPlayer < 20) {
      setCurrentHpPlayer(0);
    }
  };

  // const getWinner = () => {
  //   if (currentHpPlayer === 0 || currentDefensePlayer === 0) { // computer won
  //     return 1
  //   }

  //   if (currentHpComp === 0 || currentDefenseComp === 0) { // player is winning
  //     return 2
  //   }

  //   return -1
  // }

  // const playerWon = hasPlayerWon()
  // console.log(playerWon)
  // if (playerWon) {
  //   setPlayerScore(1)
  // }

  // const scores = {
  //   gamesWon: playerScore,
  //   gamesPlayed: gameCount
  // }

  const handleExplo = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("here");
      setExplosion(true);
    }, 5000);
    clearTimeout();
  };

  const picArray = [BG, BG1, BG2, BG3, BG5];

  const randomPic = Math.floor(Math.random() * picArray.length);
  const selectedPicture = picArray[randomPic];

  return (
    <div style={{ backgroundImage: `url(${selectedPicture})` }} className="bg ">
      <div className="fightTitle-div">
        {fight && (
          <h1 className={`${fight ? "fightTitle" : ""}`}>POKE FIGHT!</h1>
        )}
      </div>

      <div className="whoAttacked">
        <h3>
          {whoAttacks === 1
            ? "You attack!"
            : whoAttacks === 2
            ? "Computer attacks you!"
            : "Ready To Rumble!"}
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

      <div className="fighters">
        <div className="leftFighter">
          <div>
            <img
              src={player.image}
              className={`${fight ? "imgLeft" : "imgLeft-img"}`}
            />
          </div>

          <div className="pokeName">
            <h3>{player.nameEN}</h3>
            <p>Health Points:</p> <p className="">{currentHpPlayer}</p>
            <p>Defense Points:</p> <p className=""> {currentDefensePlayer}</p>
          </div>
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
            <p>Health Points:</p> <p className="">{currentHpComp}</p>
            <p>Defense Points:</p> <p className=""> {currentDefenseComp}</p>
          </div>
        </div>
      </div>
      <div className="buttons-fight-back">
        <button
          className="FightButton"
          onClick={(e) => {
            setFight(true);
            handleExplo(e);
            codeLogic();
          }}
        >
          FIGHT!
        </button>

        <button
          className="FightButton"
          onClick={(e) => {
            setFight(false);
            setExplosion(false);
          }}
        >
          BACK!
        </button>
      </div>
    </div>
  );
};

export default FightCode;
