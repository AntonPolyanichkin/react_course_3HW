import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TemperatureChecker from "./components/Temperature/TemperatureChecker";
import ChooseCompetitionSportsems from "./components/ChooseCompetitionSportsems";
import TicTacToeGame from "./components/TicTacToe/TicTacToeGame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TemperatureChecker />
      <ChooseCompetitionSportsems />
		<TicTacToeGame/>
    </>
  );
}

export default App;
