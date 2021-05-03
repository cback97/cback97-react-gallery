import GalleryItem from '../GalleryItem/GalleryItem'
import PropTypes from 'prop-types';

function GalleryList ({getImg},{galleryData}) {
    
    return (
        <div>
            <h2>This is a Snippet of me!</h2>
            <section>
               {galleryData.map( image =>
                <GalleryItem key={image.id} image={image} getImg={getImg}/>)} 
            </section>
        </div>
    )
}

export default GalleryList;