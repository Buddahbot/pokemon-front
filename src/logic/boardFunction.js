import axios from "axios";


export const stats = (scores) => {
    return axios
      .put("http://localhost:3002/player/:id", {
        gamesPlayed: scores.gamesPlayed, //no of games 10
        gamesWon: scores.gamesWon, // user played 7 out 10 
      })
      .then(res => console.log('scores saved'))
      .catch((err) => console.log(err));
  };