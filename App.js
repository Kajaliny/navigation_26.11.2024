
import './App.css';
import { useState } from 'react';
//import Calculator from './components/Calculator';
import Students from './components/Students';



function App(){
 const [theme,setTheme]=useState(true);
  const [fsize,setFsize]=useState(10);
  const darkTheme={
    backgroundColor:"#282c34",
    color:"white",
    fontSize:fsize+"px"
  
  }
  const lightTheme ={
    backgroundColor: "white",
    color:"#282c34",
    fontSize:fsize+"px"
  }

  
  
  return (

    <div className="App">
      <header className="App-header" style={theme?lightTheme:darkTheme}>
   
      <Students></Students>
         
      <button onClick={()=>{setTheme(!theme)}}>{theme?"Go Dark":"Go Light"}</button>
        <br/>
        Font Size"<input type='range'
        name="fontchg" min='10' max='50'
        step='1' value={fsize} onChange={(e)=>{setFsize(e.target.value); console.log(fsize)}}/>

     </header>
     

     
    </div>
  );
  
}

export default App;
