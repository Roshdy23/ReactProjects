import { useState } from "react";

let ingameGrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  const [gameGrid, setGameGrid] = useState(ingameGrid);
  const [symbol, setSymbol] = useState("X");

  function handleClick(rowindex, colindex) {
    if (gameGrid[rowindex][colindex] === null) {
      setGameGrid((gameboard) => {
        gameboard[rowindex][colindex] = symbol;
        return gameboard;
      });
      setSymbol((s) => {
        if (s == "X") return "O";
        else return "X";
      });
    }
  }

  return (
    <ol id="game-board">
      {gameGrid.map((row, rowindex) => {
        return (
          <li key={rowindex}>
            <ol>
              {row.map((col, colindex) => {
                return (
                  <li key={colindex}>
                    <button onClick={() => handleClick(rowindex, colindex)}>
                      {col}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
