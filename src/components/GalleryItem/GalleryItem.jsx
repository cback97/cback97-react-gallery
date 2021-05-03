import useState from 'react'
import axios from 'axios'
import './GalleryItem.css';
import { response } from 'express';

// component to src images, create like add button per image, have a toggle for photo description
function GalleryItem ({image},{getImg}) {
    
    //set up state and function to swap to and from photo/description upon toggle
    const [imgtoggle, setImgToggle] = useState(true)

    function setImgToggle () {
        if (imgtoggle) {
            setImgToggle(false)
        } else {
            setImgToggle(true)
        }
    }

// set up function to handle likes on click event 
function likes(event) {
let id = event.currentTarget.dataset.id;
console.log('like button confirmation' id)

axios.put(`/gallery/like/${id}`)
.then((response) => {
    console.log('testing', response)
    getImg();
})
.catch(error => {
    console.log('PUT error', error)
})
}

    return (
        <div>
            {imgtoggle ? }
        </div>
    )
}

export default GalleryItem;