import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/portfolio"
import Certification from "./components/certification/certification"
import Contact from "./components/contact/contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
        <Portfolio />
        <Certification />
       <Contact/>
     </div>
    </div>
  );
}

export default App;
