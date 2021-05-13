import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
// import styled from 'styled-components'

import Title from './components/title'
import Photo from './components/photo'
import Header from './components/header'



function App() {

  const [data, setData] = useState('')


  useEffect( () => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=Zkjc2Vl6NfXjSmazYhgWOEBJ4HA7sdRa2MD1mOrm')
      .then((item) => {
        
        setData(item.data)
        // console.log(item.data.url)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Header/>
      <Photo photo={data.url} /> 
      <Title title={data.title} explanation={data.explanation} />
    </div>
  );
}

export default App;
