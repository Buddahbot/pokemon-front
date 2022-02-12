import axios from "axios";


export const stats = (scores) => {
    return axios
      .post("http://localhost:3002/stats", {
        gamesPlayed: value1, //no of games 10
        gamesWon: value2, // user played 7 out 10 
      })
      .then(res => console.log('scores saved'))
      .catch((err) => console.log(err));
  };