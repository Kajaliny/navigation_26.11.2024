
import './App.css';
import{BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';


  
  function App(){
  return (

    <div className="App">
     <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contactus/>}/>
      </Routes>
     </Router>

     
    </div>
  );
  
}

export default App;
