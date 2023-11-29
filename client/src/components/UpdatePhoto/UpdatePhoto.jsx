import './updatePhoto.css'

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

import useUpdateForm from '../../hooks/useUpdateForm';

import * as postService from '../../services/postService'

const PhotoFormKeys = {
    ImageUrl: 'imageUrl',
    AddCaption: 'caption'
}



    // console.log(userSession.firstName)

export default function UpdatePhoto(){
    const navigate = useNavigate();
    const {photoId} = useParams()
    const [photo, setPhoto] = useState({
        imageUrl: '',
        caption: '',
    });

    useEffect(() => {
        postService.getOnePhotos(photoId)
        .then(result => {
            setPhoto(result);
        })
    }, [])

    const updatePhotoHandler = async(values) => {
        console.log(values)
        // let userSession = JSON.parse(localStorage.getItem('auth'));
        const result = await postService.updatePhoto(photoId, values);
        navigate(`/gallery/details/${photoId}`)
      }

    
    const {values, onChange, onSubmit} = useUpdateForm(updatePhotoHandler, photo);

    return(
        <main className='updatePhoto'>
            <div className='parrentUpdateContainer'>
                <h1>Update your photo</h1>
                <form className='updatePhotoForm'  method='POST' onSubmit={onSubmit}>
                    <label htmlFor={PhotoFormKeys.ImageUrl}>Update your image link</label>
                    <input type="text" name='imageUrl' placeholder='https//:myhairPic.com' onChange={onChange} value={values.imageUrl}/>
                    <label htmlFor={PhotoFormKeys.AddCaption}>Update Caption</label>
                    <input type="text" name='caption' placeholder='Wow, best haircut ever!' onChange={onChange} value={values.caption}/>

                    <input type="submit" className='updatePhoto-SubmitBtn'/>
                </form>
            </div>
        </main>
    );
}