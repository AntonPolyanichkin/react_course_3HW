import { useState } from "react";
import Square from "./Square";
import styles from "./style/TicTacToe.module.scss";
function TicTacToeGame() {
  const [history, setHistory] = useState([]);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [squareValue, setSquareValue] = useState("X");
  const [winner, setWinner] = useState(null);
  function onClickSquare(index) {
    const currentHistoryVersion = JSON.parse(JSON.stringify(board));
    if (board[index] || winner) return;

    const currentValue = board.slice();
    if (squareValue === "X") {
      currentValue[index] = squareValue;
      setBoard([...currentValue]);
      setSquareValue("0");
    } else {
      currentValue[index] = squareValue;
      setBoard([...currentValue]);
      setSquareValue("X");
    }
    setHistory((prev) => [...prev, currentHistoryVersion]);
    checkWinner(board);
  }

  function checkWinner(currentBoard) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        setWinner(currentBoard[a]);
        alert(`Winner: ${currentBoard[a]}`);
        setBoard(Array(9).fill(null));
        setHistory([]);
        setSquareValue(currentBoard[a]);
        setWinner(null);
      }
    }
  }

  function handleMoveBack() {
    setBoard(history.at(-1));
    setHistory((prevList) => prevList.slice(0, -1));
  }

  return (
    <section className={styles["tic-tac-toe"]}>
      <div className={styles["tic-tac-toe__container"]}>
        <div className={styles["tic-tac-toe__contentn"]}>
          <div className={styles["tic-tac-toe__game-field"]}>
            <div className={styles["tic-tac-toe__game-row"]}>
              <Square value={board[0]} handleClick={() => onClickSquare(0)} />
              <Square value={board[1]} handleClick={() => onClickSquare(1)} />
              <Square value={board[2]} handleClick={() => onClickSquare(2)} />
            </div>
            <div className={styles["tic-tac-toe__game-row"]}>
              <Square value={board[3]} handleClick={() => onClickSquare(3)} />
              <Square value={board[4]} handleClick={() => onClickSquare(4)} />
              <Square value={board[5]} handleClick={() => onClickSquare(5)} />
            </div>
            <div className={styles["tic-tac-toe__game-row"]}>
              <Square value={board[6]} handleClick={() => onClickSquare(6)} />
              <Square value={board[7]} handleClick={() => onClickSquare(7)} />
              <Square value={board[8]} handleClick={() => onClickSquare(8)} />
            </div>
          </div>
          <button onClick={handleMoveBack} disabled={history.length > 0 ? false : true}>
            Move back
          </button>
        </div>
      </div>
    </section>
  );
}

export default TicTacToeGame;
