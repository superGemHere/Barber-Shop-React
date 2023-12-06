import './galleryDetails.css'

import { useContext, useEffect, useState } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';


import * as postService from '../../services/postService';
import * as commentService from '../../services/commentService'
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';



export default function GalleryDetails(){
    const {userId, username} = useContext(AuthContext);
    const [photo, setPhoto] = useState({});
    const [comments, setComments] = useState([]);
    const [isError, setIsError] = useState(false);
    const {photoId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        postService.getOnePhotos(photoId)
        .then(result => setPhoto(result))

        commentService.getAll(photoId)
        .then(setComments)
    }, [photoId]);


    const onCommentSubmit = async() => {
        try {
            if(values.commentInput === ''){
                throw new Error('Can not submit empty comment')
            }
            const newComment = await commentService.addComent(photoId, username, values.commentInput);

            setComments(state => [...state, newComment] )
        } catch (error) {
            setIsError(true);
            setTimeout(() => setIsError(false), 2000)
        }
    }
    const {values, onChange, onSubmit} = useForm( onCommentSubmit, {
        commentInput: '',
      });
    

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
                    
                    <div className="photoSection">
                        <div className='imagePlusOwnerButton'>
                            <img className='detailsImage' src={photo.imageUrl} alt={`${photo.ownerName}'s photo`} />    
                        </div>
                        <div className="detailsText">
                            <div className="detailsOwner">
                                <p>Posted by: {photo.ownerName}</p>
                                <p>On: {photo._createdOn}</p>
                            </div>
                            <div className='detailsCaps'>
                                    <p>Caption: {photo.caption}</p>
                            </div>
                            {isOwner &&
                                    <div className='detailsBtn'>
                                                <button  className=' delBtn' onClick={deleteHandler}>Delete</button>
                                                <Link to={`/gallery/edit/${photoId}`} className='btnClass'>Edit</Link>
                                    </div>
                                }
                    </div>
                    </div>
                    <div className="commentSection">
                        <div className="commentsDetails">
                            {comments.map(currentComment => {
                              return(
                                <div className="insideComment" key={currentComment._id}>
                                    <p>{currentComment.username}</p><br /><p id='comment'>{currentComment.commentInput}</p>
                                    <p>{currentComment._createdOn}</p>
                                </div>
                              )
                            })}
                            
                        </div>
                        {isError &&
                        <p style={{color:'red', display: 'flex',alignItems:'center',justifyContent: 'center', fontSize: '17px', margin: '0'}}>Cannot submit empty comment.</p>
                        }
                        <form method='POST' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position:'relative', top:'20px'}} onSubmit={onSubmit}>
                            <input type="text" name='commentInput' onChange={onChange} value={values.commentInput} style={{width: "85%", height: '30px', marginLeft: '10px', marginTop: '5px'}}/>
                            <input type="submit" style={{width: "75px", height: '30px', marginLeft: '10px', marginTop: '5px'}}/>
                        </form>
                    </div>
        </main>
        </>
    );
}