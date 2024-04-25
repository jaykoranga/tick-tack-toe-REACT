import { useState } from "react"
export default function Player({name,symbol,turn,onPlayer}){
    
    const [inputName,setInputName]=useState(name)
    function handleinput(event){
        
        setInputName(event.target.value)
        if(isediting){
            onPlayer(symbol,inputName)
        }
        
    }
    const [isediting,setediting]=useState(0)
    let container=<input type="text"  onChange={handleinput}  value={inputName}/>;
    function handleEditing(){
        setediting(!isediting);
     
     
    }
    return(
    <>
        <li className= {turn===symbol? "active":undefined}>
         <span className="player">
          {!isediting? <span className="player-name">{inputName}</span>:container}
          
          <span className="player-symbol">{symbol}</span>
         </span>
         <button onClick={ handleEditing}>{!isediting?"edit":"save"}</button>
        </li>
    </>
    )
}