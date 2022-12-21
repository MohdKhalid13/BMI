import { useState } from 'react';
import './App.css';
import BMI from "./components/BMI";
import Navbar from './components/Navbar';

function App() {
  const [mode,setMode] = useState('light');

  const Data = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
      <Navbar mode= {mode} Data={Data} />
      <BMI mode={mode} />
     
    </>
  );
}

export default App;
