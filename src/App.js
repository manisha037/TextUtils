
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React ,{useState} from 'react';
import About from './components/About';
import { HashRouter, Routes, Route, } from "react-router-dom";


function App() { 
  const[ mode, setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type) =>
  {
    setAlert({ msg: message,
      type:type})
  }
  setTimeout (() =>{
    setAlert (null);
  },3000);
 const toggleMode=() => {
  if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor= '#1e365a';
  showAlert("dark mode has been enabled","sucess");
  }

else{
  setMode ('light');
  document.body.style.backgroundColor= 'white';
  showAlert("light mode has been enabled","sucess");
}

  }
  return (
    <>
   <HashRouter>

      <Navbar aboutText= "About" title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      
      <Alert alert= {alert}/>
      <div className= "container my-3">
      
      <Routes>
      <Route exact path='/' element={< TextForm showAlert= {showAlert} heading = "enter the text to analyze below" mode={mode}/>} />
      <Route exact path='/about' element={< About/>} />
        
        
      </Routes>
    
      
           
  </div>
  </HashRouter>
 
      
    </>
  
    
  );
}

export default App;
