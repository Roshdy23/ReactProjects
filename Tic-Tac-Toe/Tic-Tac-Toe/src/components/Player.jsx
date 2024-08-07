import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("player");
  const [isEditing, setIsEditing] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState("X");

  function setEditing() {
    setIsEditing(!isEditing);
  }

  function nameHandler(event) {
    setPlayerName(event.target.value);
  }

  function symbolHandler(event) {
    setPlayerSymbol(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <>
            <input type="text" onChange={nameHandler} value={playerName} />
            <select
              value={playerSymbol}
              onChange={symbolHandler}
              className="playerSel"
            >
              <option>X</option>
              <option>O</option>
            </select>
          </>
        ) : (
          <>
            <span className="player-name">{playerName}</span>
            <span className="player-symbol">{playerSymbol}</span>
          </>
        )}
      </span>
      <button onClick={setEditing}>Edit</button>
    </li>
  );
}
