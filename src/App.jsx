import React, { useEffect, useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";

function App() {
   const[theme,setTheme] = useState(true)
   const[themeName, setThemeName]=useState("Light")

   const background={
    background :theme?"#393939":"#969696",
    color:theme?"black":"white",
    width:"100vw",
    height:"100vh",
   }
    //Hook effect 
   useEffect(()=>{
    if(themeName == 'Dark'){
      setThemeName('Light')
    }
    else{
      setThemeName("Dark")
    }
   },[theme])
   let handleTheme=()=>{
    setTheme(!theme)
   }

  return (
    <div style={background} className="container">
      <div className="header">

        <button onClick={handleTheme} className="themeBtn">{themeName}</button>
      </div>
      <QuestionBox props = {theme}/>
    </div>
  );
}

export default App;