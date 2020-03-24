import React, { useState } from 'react';
import Xo from './components/game/XO';
import './game.css';

let player1 = 0;
let player2 = 0;

function Game() {

  const _ways = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  const [ways, setWays] = useState(_ways);
  const [player, setPlayer] = useState(0);


  const reset = () => {
    for (let i = 1; i <= 9; i++) {
      document.getElementById(`div${i}`).innerHTML = '';
    }
    setWays(_ways);
  }

  const conditions = (a, b, c) => {
    if ((ways[a] === 1 && ways[b] === 1 && ways[c] === 1) ||
      (ways[a] === 0 && ways[b] === 0 && ways[c] === 0)) {
      return true
    }
  }

  const showMessage = () => {
    if (player === 1) {
      alert('the winner is O');
      player2 = player2 + 1;
    } else {
      alert('the winner is X');
      player1 = player1 + 1;
    }
    reset();
    alert('play new game');
  }


  const check = () => {
    if (
      conditions(0, 1, 2)
    ) {
      showMessage()
    } else if (
      conditions(3, 4, 5)
    ) {
      showMessage()
    } else if (
      conditions(6, 7, 8)
    ) {
      showMessage()
    } else if (
      conditions(0, 3, 6)
    ) {
      showMessage()
    } else if (
      conditions(1, 4, 7)
    ) {
      showMessage()
    } else if (
      conditions(2, 5, 8)
    ) {
      showMessage()
    } else if (
      conditions(0, 4, 8)
    ) {
      showMessage()
    } else if (
      conditions(2, 4, 6)
    ) {
      showMessage()
    }
  };

  const myFunction = index => {
    if (player === 0) {
      ways[index - 1] = 1;
      document.getElementById(`div${index}`).innerHTML = 'X';
      setPlayer(1);
    }
    if (player === 1) {
      ways[index - 1] = 0;
      document.getElementById(`div${index}`).innerHTML = 'O';
      setPlayer(0);
    }
    setWays(ways);

    check();
  };



  return (
    <div className="App">
      <button onClick={reset} class="ui green button restart">Restart game</button>
      <div className="players">
        <a class="ui teal image label">
          <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
          player 1
          <div class="detail">{player1}</div>
        </a>
        <a class="ui yellow image label">
          <img src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg " />
          player 2
          <div class="detail">{player2}</div>
        </a>
      </div>

      <div>
        <div className="container">
          <div className="h1">
            <h1>Tic Tac Toe</h1>
          </div>



          <div className="row border">
            {ways.map((_, index) => (
              <Xo
                key={index}
                index={index + 1}
                myId={'div' + (index + 1)}
                myFunction={myFunction}
              />
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}

export default Game;