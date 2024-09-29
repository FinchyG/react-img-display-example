import React, { useState } from "react";
import './App.css';
import HeaderOne from "./HeaderOne.js";

function App() {

  return (
    <div>
      <HeaderOne title="Tea Cups For Sale" />
      <div>
        <img src={require("./images/blue-tea-cup.jpeg")} alt="blue tea cup" />
        <img src={require("./images/red-tea-cup.jpeg")} alt="red tea cup" />
      </div>
      <div>
        <img src={require("./images/green-tea-cup.jpeg")} alt="green tea cup" />
        <img src={require("./images/yellow-tea-cup.jpeg")} alt="yellow tea cup" />
      </div>
    </div>
     );
}

export default App;
