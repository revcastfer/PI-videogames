import './App.css';
import Landing from "../src/components/landing.jsx"
import Home from "../src/components/home.jsx"
import Detail from "../src/components/detail.jsx"
import { Routes, Route  } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
    <Routes>
     <Route path="/" element={<Landing/>}  />
     <Route path="Home" element={<Home/>}/ >
     <Route path="Detail/:id" element={<Detail/>}/ >  
       
       
   </Routes>
    
      
    </div>
  );
}

export default App;
