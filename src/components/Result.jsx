
import React from "react";
//Function component
export default function Result(props){
    //Props Destructuring
    let result = props.props[0]
    let color = props.props[1]

    let styleresults = {
        background : color?"#7F7F7F":"#7F7F7F"
    }
    let handlerestart = ()=>{
        window.location.reload()
    }
    //rendering is used
    return(
        <div className="resultbox" style={styleresults}>
            <h1>Final Results</h1>
            <h2>{result} out of 5 correct - {(result/5)*100}.00%</h2>
            <button className="restart" onClick={handlerestart}>Restart game</button>
        </div>
    )
}