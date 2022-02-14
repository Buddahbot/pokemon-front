import "../App.css";
import "./leaderStyle.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { allPlayer } from "../logic/boardFunction";

const Leaderboard = () => {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [users, setUsers] = useState([])
  const[user, setUser] = useState('')

  const getAllPlayers = () => {
    allPlayer().then(res =>{
      if (res){
          console.log(setUsers(res.data)) 
      }
    })
  }

  useEffect(() => {
    getAllPlayers()
    console.log(user)
  })

//hey its showing testBasti now , but only the name 

  return (
    <>
      <div className="main-container">
        <div className="main-container-header">
          <h1>Leaderboard</h1>
        </div>
        <div className="poke-card">
          <div className="leaderboard-grid">
            <p className="leader-header">Player Name</p>
            <p className="leader-header">Games Played</p>
            <p className="leader-header">Games Won</p>
            <div>
            {users.map((user) => {
              return (
              <div>
              <h1 className="leader-content bold">Player Name: {user.name}</h1>
              <p className="leader-content">{user.gamesPlayed}</p>
              <p className="leader-content">{user.gamesWon}</p>
              </div>
              )
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
