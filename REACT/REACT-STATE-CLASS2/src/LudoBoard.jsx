import { useState } from "react";
import "./LudoBoard.css"

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let updateBlue = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      blue: prevMoves.blue + 1,
    }));
  };

  let updateYellow = () => {
    console.log(`moves.yellow = ${moves.yellow}`);
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    console.log(`moves.green = ${moves.green}`);
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };

  let updateRed = () => {
    console.log(`moves.red = ${moves.red}`);
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };  

  return (
    <div>
      <h1>🎲 Let the Ludo Battle Begin! 🚀</h1>
      <div className="board">
        <h2>Blue has moved <strong>{moves.blue}</strong> times!</h2>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
        ➡️ Move Blue Forward!
        </button>
      </div>

      <div className="board">
        <h2>Yellow has moved <strong>{moves.yellow}</strong> times!</h2>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          ➡️ Move Yellow Forward!
        </button>
      </div>
      <div className="board">
        <h2>Green has moved <strong>{moves.green}</strong> times!</h2>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
        ➡️ Move Green Forward!
        </button>
      </div>
      <div className="board">
        <h2>Red has moved <strong>{moves.red}</strong> times!</h2>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
        ➡️ Move Red Forward!
        </button>
      </div>
    </div>
  );
}
