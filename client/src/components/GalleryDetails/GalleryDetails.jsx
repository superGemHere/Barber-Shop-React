import './galleryDetails.css'

import { useContext, useEffect, useState } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';


import * as postService from '../../services/postService';
import AuthContext from '../../contexts/authContext';

export default function GalleryDetails(){
    const {userId} = useContext(AuthContext)
    const [photo, setPhoto] = useState({});
    const {photoId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        postService.getOnePhotos(photoId)
        .then(result => setPhoto(result))
    }, [photoId]);

    

    const deleteHandler = async () => {
        if(confirm('Are you sure you want to delete this post?')){
            await postService.deletePhoto(photoId);
            navigate('/gallery');
        }
    }

    const isOwner = photo._ownerId === userId;
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
                       {isOwner &&
                           <div className='detailsBtn'>
                           <button  className=' delBtn' onClick={deleteHandler}>Delete</button>
                           <Link to={`/gallery/edit/${photoId}`} className='btnClass'>Edit</Link>
                            </div>
                       }
                   
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}