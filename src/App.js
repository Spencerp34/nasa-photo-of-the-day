import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

import Title from './components/title'
import Photo from './components/photo'



function App() {


  return (
    <div className="App">
      <Title data={null}/>
      <Photo data={null} /> 
    </div>
  );
}

export default App;
