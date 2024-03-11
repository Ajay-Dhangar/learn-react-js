import React from "react";
import "./css/custom.css";
import Navbar from "./Theme/Layout/Navbar";
// import Intro from './modules/Introduction/Intro';
import BasicApp from "./modules/Introduction/BasicApp";
import Footer from "./Theme/Layout/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Intro /> */}
      <BasicApp />

      <Footer />
      
    </div>
  );
}

export default App;
