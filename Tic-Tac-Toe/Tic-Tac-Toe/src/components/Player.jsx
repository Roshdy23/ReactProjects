import { useState } from "react";

export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState(symbol);

  function setEditing() {
    setIsEditing((editing) => !editing);
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
            <span className="player-symbol">{playerSymbol}</span>
          </>
        ) : (
          <>
            <span className="player-name">{playerName}</span>
            <span className="player-symbol">{playerSymbol}</span>
          </>
        )}
      </span>
      <button onClick={setEditing}> {isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
