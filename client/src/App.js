import './App.css';
import Landing from "../src/components/landing.jsx"
import Home from "../src/components/home.jsx"
import { BrowserRouter as Router, Route  } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
    <Router>
     <Route path="/" element={<Landing/>}  />
     <Route path="Home" element={<Home/>} / >
     
   </Router>
    
      
    </div>
  );
}

export default App;
