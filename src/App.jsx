import Player from "./components/player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winningCombinations"
import { useState } from "react"
import GameOver from "./components/GameOver"


const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function App() {
const [activePlayer,setPlayer]=useState("X")
const [gameTurns,setGameTurns]=useState([])
let hasDraw=false;
let finalGameBoard = initialGameBoard.map(row => [...row]);
for (const i of gameTurns) {
  const {square,player}=i;
  const {row,col}=square;
 
  finalGameBoard[row][col]=player;}
 let winner=null;
for (const combination of WINNING_COMBINATIONS) {
  const firstSquareSymbol=finalGameBoard[combination[0].row][combination[0].column];
  const secondSquareSymbol=finalGameBoard[combination[1].row][combination[1].column];
  const thirdSquareSymbol=finalGameBoard[combination[2].row][combination[2].column];
  if( firstSquareSymbol!=null && firstSquareSymbol===secondSquareSymbol){
    if(secondSquareSymbol===thirdSquareSymbol){
        winner=firstSquareSymbol
    }
  }
  
}
if(gameTurns.length===9 && winner===null){
  hasDraw=true;
}

function handleActivePlayer(rowIndex,colIndex){
  setPlayer((prevPlayer)=>(prevPlayer==="X"? "O":"X"));
  setGameTurns((prevGameTurn)=>{
    let currentPlayer="X";
    if(gameTurns.length>0 && gameTurns[0].player==="X"){
      currentPlayer="O";
    }
    const updatedTurns=[{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevGameTurn]
    
    return updatedTurns
  })
}


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player turn={activePlayer} symbol="X" name="aditi"></Player>
         <Player turn={activePlayer} symbol="O" name="jay"></Player>
          
         
        </ol>
        {(winner!=null || hasDraw)?<GameOver winner={winner}/>:undefined}
        <GameBoard onSelect={handleActivePlayer} board={finalGameBoard}/>
        <Log turn={gameTurns}/>
      </div>
    </main>
  )
}

export default App
