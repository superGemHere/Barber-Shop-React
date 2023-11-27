import './gallery.css'

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import * as postService from '../../services/postService';



export default function Gallery(){
    const [photos, setPhotos] = useState([]);
    useEffect( () => {
       
    postService.getAllPhotos()
    .then((result) => {
        setPhotos(result)
        
        })
    
    }, []);
       
    const isEmpty = photos.length == 0 ? true : false;

    return(
        
        <main className="gallery">
            <h1>Compass Gallery</h1>
            <div className="galleryContainer">
            {!isEmpty && photos.map(currentPhoto => {
                return(
                <div className='photoCard' key={currentPhoto._id} >
                    <img className='image' src={currentPhoto.imageUrl} alt="" />
                    <div className='userCredentials'>
                        <p className='photoCaption'>{currentPhoto.caption}</p>
                        <p className='username'>By: {currentPhoto.ownerName}</p>
                        <p className='createdOn'>{currentPhoto._createdOn}</p>
                    <Link to={`/gallery/details/${currentPhoto._id}`} className='detailsBtnGallery'>Details</Link>
                    </div>
                    </div>
                
                )
                
            })}
            {isEmpty && <h3>There are no photos to display</h3>}
            </div>
        </main>
    );

}