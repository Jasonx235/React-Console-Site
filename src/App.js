import React from "react";
import Consoles from "./components/Consoles";
import Navbar from "./components/Navbar";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Consoles />
      </div>
    </div>
  );
}

export default App;
