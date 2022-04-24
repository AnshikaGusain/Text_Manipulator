import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import {useState} from "react";
function App() {
  const [mode,setMode]=useState('light');
  const changeMode=()=>{
    let body=document.getElementById("body");
    if(mode==="light"){
      setMode("dark");
      body.style.backgroundColor="#213549";
      body.style.color="white";
    }
    else{
      setMode("light");
      body.style.backgroundColor="white";
      body.style.color="black";
    }
  }
  return (
    <>
      <Navbar changeMode={changeMode} mode={mode}/>
      <Textarea mode={mode}/>
    </>
  );
}

export default App;
