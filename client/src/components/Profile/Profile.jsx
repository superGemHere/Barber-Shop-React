import './profile.css'

import { useContext, useEffect, useState } from 'react';

import * as postService from '../../services/postService'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';


export default function Profile(){
    const {userId, username, email} = useContext(AuthContext);
    const navigate = useNavigate();

    const [userPhotos, setUserPhotos] = useState([]);
    useEffect(() => {
        postService.getAllPhotos()
        .then(results => {
             const arr = results.filter(result => result._ownerId === userId)
                
            setUserPhotos(arr);
        })
        
    }, [])

    const isUploaded = userPhotos.length > 0;

    return(
        <main className='profile'>
            <div className='profileContainer'>
                <div className='profileParent'>
                <h2>Profile</h2>
            <div className="userInfo">
                <p>Username : {username}</p>
                <p>E-mail : {email}</p>
                <p>Post's count : {userPhotos.length}</p>
            </div>
            { isUploaded &&
                <div className='userPosts'>
                { userPhotos.map(currentPhoto => {
                    return (<div className='userPostCard' key={currentPhoto._id} onClick={() => navigate(`/gallery/details/${currentPhoto._id}`)}>
                    <img className='userPostCardImage' src={currentPhoto.imageUrl} alt="" />
                    </div>   
                    )
                })}
                
                </div>
            }
            { !isUploaded && <Link to={'/add-photo'} className='profile-firstUpload'>Upload your first photo</Link>}
            </div>
            </div>
        </main>
    );
}