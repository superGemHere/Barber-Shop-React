import './galleryDetails.css'

import {Link, useParams} from 'react-router-dom';

import * as postService from '../../services/postService';
import { useEffect, useState } from 'react';

export default function GalleryDetails(){
    const [photo, setPhoto] = useState({});
    const {photoId} = useParams();
    useEffect(() => {
        postService.getOnePhotos(photoId)
        .then(result => setPhoto(result))
    }, [photoId])
    return(
        <>
        <main className="galleryDetails">
            <div className='detailsParent'>
                <div className='detailsCard'>
                    <img className='detailsImage' src={photo.imageUrl} alt={`${photo.ownerName}'s photo`} />
                    <div className='detailsText'>
                       <div className="detailsOwner">
                        <h3>Owner: {photo.ownerName}</h3>
                       </div>
                       <div className='detailsCaps'>
                        <h2>Caption</h2>
                        <p>{photo.caption}</p>
                       </div>
                       <div className='detailsBtn'>
                    <Link to={`/gallery/delete/${photoId}`} className='btnClass'>Delete</Link>
                    <Link to={`/gallery/edit/${photoId}`} className='btnClass'>Edit</Link>
                       </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}