export default function Log({turn}){
    return(
        <ol id="log">
            
            {turn.map((item)=>(<li key={0}>{item.player}at{item.square.row}{item.square.col}</li>))}
            
          
        </ol>
    )
}