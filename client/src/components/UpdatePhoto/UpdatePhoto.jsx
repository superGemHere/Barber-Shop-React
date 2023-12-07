import './updatePhoto.css'

import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

import useUpdateForm from '../../hooks/useUpdateForm';

import * as postService from '../../services/postService'
import AuthContext from '../../contexts/authContext';

const PhotoFormKeys = {
    ImageUrl: 'imageUrl',
    AddCaption: 'caption'
}




export default function UpdatePhoto(){
    const { userId } = useContext(AuthContext);
    const navigate = useNavigate();
    const {photoId} = useParams();
    const [addPhotoErr, setAddPhotoErr] = useState('');
    const [photo, setPhoto] = useState({
        imageUrl: '',
        caption: '',
    });

    useEffect(() => {
        postService.getOnePhotos(photoId)
        .then(result => {
            setPhoto(result);
        })
    }, []);
    
    

    const updatePhotoHandler = async(values) => {
        try {
            if(values.imageUrl== '' || values.addCaption == ''){
                throw new Error('All fields are required');
            }
            if(!values.imageUrl.match(/^(http|https):\/\//)){
                throw new Error(`Image's url must start with "http" or "https"`);
            }
            if(values.caption.length < 5){
                throw new Error('Caption must be at least 5 charaters long');
            }
            if(values.caption.length > 50){
                throw new Error('Caption cannot be longer than  50 characters');
            }
            
            const result = await postService.updatePhoto(photoId, values);
            navigate(`/gallery/details/${photoId}`)
        } catch (err) {
            console.log(err)
            setAddPhotoErr(err.message);
            setTimeout(()=> {
                setAddPhotoErr('');
            }, 2000)
        }
      }

    
    const {values, onChange, onSubmit} = useUpdateForm(updatePhotoHandler, photo);

    return(
        <main className='updatePhoto'>
             {addPhotoErr && 
          <div className="alert3">
            <strong></strong> {addPhotoErr}
          </div>
          }
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