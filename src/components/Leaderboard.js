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
          <div className="category-name ">
            <h2 className="content-leader bold">Basti</h2>
            <h2 className="content-leader" >41</h2>
            <h2 className="content-leader">32</h2>
          </div>



        </div>


      </div>


    </div>
  );
};

export default Leaderboard;
