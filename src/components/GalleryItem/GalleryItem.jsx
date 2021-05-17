import { useState } from 'react'
import axios from 'axios'
import './GalleryItem.css';
import PropTypes from 'prop-types';

// component to src images, create like add button per image, have a toggle for photo description
function GalleryItem({ image, getImg }) {

    //set up state and function to swap to and from photo/description upon toggle
    const [imgtoggle, setImgToggle] = useState(true)

    function setGalToggle() {
        if (imgtoggle) {
            setImgToggle(false)
        } else {
            setImgToggle(true)
        }
    } // end setImgToggle

    // set up function to handle likes on click event 
    function likes(event) {
        let id = image.id;
        console.log('like button confirmation', id)

        axios.put(`/gallery/like/${id}`)
            .then((response) => {
                console.log('testing', response)
                getImg();
            })
            .catch(error => {
                console.log('PUT error', error)
            })
    }// end likes

    return (

        <div>
            {/*conditional rendering on toggle */}
            {imgtoggle ? (
                <img onClick={setGalToggle} src={image.path} />
            ) : (
                <p onClick={setGalToggle}> {image.description} </p>
            )}
            <p>{image.likes}likes</p>
            <button onClick={likes} data-id={image.id}>Add Like</button>
        </div>

    )
}

export default GalleryItem;