import "../App.css";
import "./leaderStyle.css";

const Leaderboard = () => {
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

            {/* PLACEHOLDER CONTENT */}
            <p className="leader-content bold">Basti</p>
            <p className="leader-content">41</p>
            <p className="leader-content">32</p>
            <p className="leader-content bold">Paul</p>
            <p className="leader-content">100</p>
            <p className="leader-content">100</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
