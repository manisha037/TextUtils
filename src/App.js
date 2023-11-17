
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
  setTimeout(() =>{
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
   
      <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
      
      <Alert alert= {alert}/>
      <div className= "container my-3">
      <HashRouter>
      <Routes>
      <Route exact path='/' element={<Homepage />} />
        <Route exact path='/lsevents' element={<Dashboard />} />
        <Route exact path='/ticket' element={<TicketVerification />} />
        <Route exact path='/gen' element={<TicketGenrator />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/payment' element={<Payment />} />
        <Route exact path='/commingsoon' element={<CoomingSoon />} />
        <Route exact path='/bookevent/:event_id' element={<BookEvent />} />
      </Routes>
    </HashRouter>
      
            <TextForm showAlert= {showAlert} heading = "enter the text to analyze below" mode={mode}/>
          <About></About>
  </div>
 
      
    </>
  
    
  );
}

export default App;
