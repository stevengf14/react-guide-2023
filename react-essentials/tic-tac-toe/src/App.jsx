import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X"></Player>
        <Player initialName="Player 2" symbol="O"></Player>
      </ol>
      <GameBoard />
    </div>
  );
}

export default App;
