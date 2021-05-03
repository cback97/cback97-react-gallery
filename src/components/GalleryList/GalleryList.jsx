import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList (props) {
    
    return (
        <div>
            <h2>This is a Snippet of me!</h2>
            <section>
                {props.images.map(image => 
                
                        )}
            </section>
        </div>
    )
}

export default GalleryList;