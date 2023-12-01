import './profile.css'

import { useContext, useEffect, useState } from 'react';

import * as postService from '../../services/postService'
import { useNavigate } from 'react-router-dom';
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

 

    return(
        <main className='profile'>
            <div className='profileContainer'>
                <h2>Profile</h2>
            <div className="userInfo">
                <p>Username : {username}</p>
                <p>E-mail : {email}</p>
                <p>Post's count : {userPhotos.length}</p>
            </div>
            <div className='userPosts'>
                {userPhotos.map(currentPhoto => {
                    return (<div className='userPostCard' key={currentPhoto._id} onClick={() => navigate(`/gallery/details/${currentPhoto._id}`)}>
                    <img className='userPostCardImage' src={currentPhoto.imageUrl} alt="" />
                    </div>   
                    )
                })}
                
                </div>
            </div>
        </main>
    );
}