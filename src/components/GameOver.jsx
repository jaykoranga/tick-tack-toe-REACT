
export default function GameOver({winner}){
    
    function handleRefresh(){
        window.location.reload();
    }
    return(<div id="game-over">
       <h2>game over</h2>
       {winner?<p>{winner} won the game</p>:<p>Aww it's a Drawwwwww koi na dobara khelo aap !</p>}
       
       <button onClick={handleRefresh}>rematch</button>
    </div>)
}