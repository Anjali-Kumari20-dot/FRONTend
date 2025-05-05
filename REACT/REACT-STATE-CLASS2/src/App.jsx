import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./Helper";

function App() {
  let winningSum = 15
  let winCondition = (ticket) => {
    return sum(ticket) === winningSum;
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
