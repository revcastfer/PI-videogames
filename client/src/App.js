import './App.css';
import Landing from "../src/components/landing.jsx"
import Formulario from "../src/components/form.jsx"
import Home from "../src/components/home.jsx"
import Detail from "../src/components/detail.jsx"
import { Routes, Route  } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
    <Routes>
     <Route path="/" element={<Landing/>}/>
     <Route path="Home" element={<Home/>}/>
     <Route path="Detail/:id" element={<Detail/>}/>  
     <Route path="Formulario" element={<Formulario/>}/>
       
   </Routes>
    
      
    </div>
  );
}

export default App;
