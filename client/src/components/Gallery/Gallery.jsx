import './gallery.css'

import { useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';

import * as postService from '../../services/postService';



export default function Gallery(){
    const [photos, setPhotos] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
       
    postService.getAllPhotos()
    .then((result) => {
        setPhotos(result)
        })
    
    }, []);
       
    const isEmpty = photos.length == 0 ? true : false;

    return(
        
        <main className="gallery">
            {/* <h1>Compass Gallery</h1> */}
            <div className="galleryContainer">
            {!isEmpty && photos.map(currentPhoto => {
                return(
                

                    <div className="item" key={currentPhoto._id} onClick={() => navigate(`/gallery/details/${currentPhoto._id}`)}>
                        <div className="polaroid">
                            <img src={currentPhoto.imageUrl}/>
                        <div className="caption">{currentPhoto.caption}</div>
                        </div>
                    </div>
                    
                    
                
                )
                
            })}
            {isEmpty && <h3>There are no photos to display</h3>}
            </div>
        </main>
    );

}


{/* <div className='photoCard' key={currentPhoto._id} >
                    <img className='image' src={currentPhoto.imageUrl} alt="" />
                    <div className='userCredentials'>
                        <p className='photoCaption'>{currentPhoto.caption}</p>
                        <p className='username'>By: {currentPhoto.ownerName}</p>
                        <p className='createdOn'>{currentPhoto._createdOn}</p>
                    <Link to={`/gallery/details/${currentPhoto._id}`} className='detailsBtnGallery'>Details</Link>
                    </div>
                    </div> */}