import React from "react";
import Consoles from "./components/Consoles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Consoles />
      </div>
      <Footer />
    </div>
  );
}

export default App;
