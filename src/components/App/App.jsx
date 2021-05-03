import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'


function App() {

let [galleryData, SetGalleryData] = useState([]);

useEffect(() => {
getImg();
}, [])

  const getImg = () => {

    axios.get('/gallery')
    .then(response => {
      console.log(response.data)
      SetGalleryData(response.data)
    })
    .catch(error =>  {
      console.log('Could not retrieve response data, try again later!');
    })

  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
   
        <img src="images/goat_small.jpg"/>

      </div>
    );
}

export default App;

