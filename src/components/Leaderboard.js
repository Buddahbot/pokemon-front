import "../App.css";
import "./leaderStyle.css"

const Leaderboard = () => {
  return (
    <div className="container-leader">
      <h1>Leaderboard</h1>
      <div className="table">

        <div className="category-name">
          <h1 className="h1">Player Name</h1>
          <h1 className="h1">Games Played</h1>
          <h1 className="h1">Games Won</h1>



        </div>



        <div>
          <div className="name">

          </div>

          <div className="played-games">

          </div>

          <div className="won-games">

          </div>

        </div>


      </div>


    </div>
  );
};

export default Leaderboard;
