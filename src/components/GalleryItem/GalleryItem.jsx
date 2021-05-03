import useState from 'react'
import axios from 'axios'

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



    return (
        
    )
}

export default GalleryItem;