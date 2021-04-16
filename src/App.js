import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'


function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=M52JDgL4fF5k1UfAxerp7GtW1Lqr2z2jHnZ80mha')
    .then((res) => {
      setNasaData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
