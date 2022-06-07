import { useState, useEffect } from "react";

const Projects = () => {

const [player1Score, setPlayer1Score] = useState(0);
const [player2Score, setPlayer2Score] = useState(0);
const [randomP1, setRandomP1] = useState(0);
const [randomP2, setRandomP2] = useState(0);
const [p1HasRolled, setP1HasRolled] = useState(false);
const [p2HasRolled, setP2HasRolled] = useState(false);

const randomNumber = () => Math.round(Math.random()* (6-1) +(1));

const player1Die = () => {
  if (!p1HasRolled) {
    setRandomP1(randomNumber);
    setP1HasRolled(true);
    p1HasRolled = true;
  }
}

const player2Die = () => {
  if (!p2HasRolled) {
    setRandomP2(randomNumber);
    setP2HasRolled(true);
  }
}

const compareRoll = (randomP1, randomP2) => {
  // console.log("P1",randomP1,"P2", randomP2);
  if (randomP1 > randomP2) {
    setPlayer1Score(player1Score + 1);
  } else if (randomP1 === randomP2) {

  }  
  else {
    setPlayer2Score(player2Score + 1);
  }
}

const startAgain = () => { 
  setRandomP1(0);
  setRandomP2(0);
  setP1HasRolled(false);
  setP2HasRolled(false);
}

useEffect(() => {
  if(player1Score === 11) {
    alert("Player1 win")
  } else if(player2Score === 11){
    alert("Player2 win!")
  }
}, [player1Score, player2Score])




  return <div>
   <div className="Scoreboard">
    <div className="Player1">Player 1
      <p>{player1Score}</p>
    </div>
    <div className="Player2">Player 2
      <p>{player2Score}</p>
    

    </div>
    <p>{randomP1}</p>
    <button className="btn" onClick={player1Die}>Roll_Player1</button>
    <p>{randomP2}</p>
    <button className="btn" onClick={player2Die}>Roll_Player2</button>

    <button onClick={() => compareRoll(randomP1, randomP2)}>Compare Rolls</button>
    <button onClick={startAgain}>Start Again</button>
    </div>

  </div>;
};

export default Projects;
