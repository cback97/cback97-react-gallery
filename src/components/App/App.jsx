import React from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryItem from '../GalleryItem/GalleryItem'

function App() {

let [galleryData, SetGalleryData] = useState([]);

  const getImg = () => {

    axios.get('/gallery')
    .then(response => {
      console.log(response.data)
    })

  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;

