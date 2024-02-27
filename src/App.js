import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import NavBar from "./Componets/NavBar";
import Home from "./Pages/Home";
import About from "./Componets/about";
import Fgm from "./Componets/Fgm";
import EarlyPregnancies from "./Componets/EarlyPregnancies";
import Footer from "./Componets/Footer";
import EarlyMarriages from "./Componets/EarlyMarriages";
import Menstrual from "./Componets/Menstrual";
import Reviews from "./Componets/Reviews";
function App() {
  return (
    <div className="App">
    <Router>
    <NavBar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/Tuongee" element={<Home/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Fgm" element={<Fgm/>}/>
    <Route path="/EarlyPregnancies" element={<EarlyPregnancies/>}/>
    <Route path="/EarlyMarriages" element={<EarlyMarriages/>}/>
    <Route path="/Menstrual" element={<Menstrual/>}/>
    <Route path="/Reviews" element={<Reviews/>}/>
    </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
