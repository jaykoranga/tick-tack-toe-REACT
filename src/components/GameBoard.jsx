
export default function GameBoard({onSelect,board}){
 
      
    
    // function handleSelectButton(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedGameBoard=prevGameBoard.map((innerArr)=>(innerArr.map((inner)=>(inner))))
    //         updatedGameBoard[rowIndex][colIndex]=turn
    //         return updatedGameBoard
    //     })
    //     onSelect();//change the active player 
    // }   
    return(
         <ol id="game-board">
          {
            board.map((row,rowIndex)=>
                (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=>
                      (<li key={colIndex}>
                        <button onClick={()=>onSelect(rowIndex,colIndex)} disabled={playerSymbol!=null}>{playerSymbol}</button>
                      </li>)
                    )}
                </ol>
               </li>)
            )
          }
         </ol>
    )
}