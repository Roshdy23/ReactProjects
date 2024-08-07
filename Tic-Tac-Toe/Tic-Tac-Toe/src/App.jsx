import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player1" symbol="o" />
          <Player name="player2" symbol="x" />
        </ol>
      </div>
    </main>
  );
}

export default App;
