//import statement
import React,{useState} from "react";
import question from "../questions"
import Result from "./Result"

//function components
export default function QuestionBox(props){
  let color = props.props
  let [highlight, setLight]= useState(false)
  //Inline styling is used 
  let css = {
    background:color?"#7F7F7F":"#7F7F7F",
  }

  let highlightstyle= {
    color : highlight?"red":"black"

  }

  let [QuesNo,setNo]= useState(0)
  let [score , setScore]=useState(0)
  //Event handler 
  let handleOption =(el)=>{
    console.log(el.target.value)

    setScore((el.target.value === 'true'?score+1:score))
    setNo(QuesNo+1)
  }
  //Conditional Rendering method 
  return(
    <>
    {QuesNo <5 ?(
      <div className='quesBox' style={css}>
      <h2>Question: {QuesNo+1} out of 5</h2>
      <h3 style={highlightstyle}>{question[QuesNo].text}</h3>
      <div className='optbox'>
      {question[QuesNo].options.map((el)=>(
        <button className='options' value={el.isCorrect} key={el.id} onClick={handleOption} >{el.text}</button>
      ))}
      </div>
      <div>
        <button className='highlightbtn' onClick={()=>setLight(true)}>Highlight</button>
        <button className='highlightbtn' onClick={()=>setLight(false)}>Remove Highlight</button>
      </div>
    </div>
    )
    :(<Result props={[score,color]}/>)
    }
    </>  
  )
}