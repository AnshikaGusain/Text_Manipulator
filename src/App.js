import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import {useState} from "react";
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";
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
    {/* <BrowserRouter> */}
      <Navbar changeMode={changeMode} mode={mode}/>
      {/* <Routes>
          <Route exact path="/about" element={<About mode={mode} />}/>
          <Route exact path="/" element={<Textarea mode={mode}/>}/>
      </Routes>
    </BrowserRouter> */}
      <Textarea mode={mode}/>
    </>
  );
}

export default App;
