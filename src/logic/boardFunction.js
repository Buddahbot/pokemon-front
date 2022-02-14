import axios from "axios";
//from login bring id of the user and pass it in the put method
// replace 10 and 11 by scores value

export const stats = (scores, playerName) => {
  return axios
    .put(`http://localhost:3002/player/620a2dee2a1ebadbcaa7ddc1`, {
      gamesPlayed: parseInt(scores.gamesPlayed), //no of games 10
      gamesWon: parseInt(scores.gamesWon), // user played 7 out 10
    })
    .then((res) => console.log("scores saved"))
    .catch((err) => console.log(err));
};

export const userStats = (scores) => {
  return axios
    .get("http://localhost:3002/player/:id")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
