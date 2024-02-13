// App.js
import React from "react";
import PlayersList from "./PlayerList";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <h1>Soccer Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;