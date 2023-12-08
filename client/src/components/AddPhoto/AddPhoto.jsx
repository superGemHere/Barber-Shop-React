import './addPhoto.css'

import { useNavigate } from 'react-router-dom'

import useForm from '../../hooks/useForm';

import * as postService from '../../services/postService'
import { useState } from 'react';

const PhotoFormKeys = {
    ImageUrl: 'imageUrl',
    AddCaption: 'addCaption'
}

export default function AddPhoto(){
    const [addPhotoErr, setAddPhotoErr] = useState('');
    const navigate = useNavigate();

    const addPhotoHandler = async(values) => {
        try {

            if(values.imageUrl== '' || values.addCaption == ''){
                throw new Error('All fields are required');
            }
            if(!values.imageUrl.match(/^(http|https):\/\//)){
                throw new Error(`Image's url must start with "http" or "https"`);
            }
            if(values.addCaption.length < 5){
                throw new Error('Caption must be at least 5 charaters long');
            }
            if(values.addCaption.length > 150){
                throw new Error('Caption cannot be longer than  150 characters');
            }
           
            let userSession = JSON.parse(localStorage.getItem('auth'));
            const result = await postService.addPhoto(values.imageUrl, values.addCaption, userSession.username);
            navigate('/gallery')
        } catch (err) {
            setAddPhotoErr(err.message);
        setTimeout(()=> {
            setAddPhotoErr('');
        }, 2000)
        }
      }
    
    const {values, onChange, onSubmit} = useForm(addPhotoHandler, {
        imageUrl: '',
        addCaption: '',
      });

    return(
        <main className='addPhoto'>
            {addPhotoErr && 
          <div className="alert2">
            <strong></strong> {addPhotoErr}
          </div>
          }
            <div className='parrentAddContainer'>
                <h1>Upload your photo</h1>
                <form className='addPhotoForm'  method='POST' onSubmit={onSubmit}>
                    <label htmlFor={PhotoFormKeys.ImageUrl}>Paste your image link</label>
                    <input type="text" name={PhotoFormKeys.ImageUrl} placeholder='https//:myhairPic.com' onChange={onChange} value={values[PhotoFormKeys.ImageUrl]}/>
                    <label htmlFor={PhotoFormKeys.AddCaption}>Add Caption</label>
                    <input type="text" name={PhotoFormKeys.AddCaption} placeholder='Wow, best haircut ever!' onChange={onChange} value={values[PhotoFormKeys.AddCaption]}/>

                    <input type="submit" className='addPhoto-SubmitBtn'/>
                </form>
            </div>
        </main>
    );
}