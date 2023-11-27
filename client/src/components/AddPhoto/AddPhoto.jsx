import './addPhoto.css'

import { useNavigate } from 'react-router-dom'

import useForm from '../../hooks/useForm';

import * as postService from '../../services/postService'

const PhotoFormKeys = {
    ImageUrl: 'imageUrl',
    AddCaption: 'addCaption'
}



    // console.log(userSession.firstName)

export default function AddPhoto(){
    const navigate = useNavigate();

    const addPhotoHandler = async(values) => {
        let userSession = JSON.parse(localStorage.getItem('auth'));
        const result = await postService.addPhoto(values.imageUrl, values.addCaption, userSession.username);
        navigate('/gallery')
      }
    
    const {values, onChange, onSubmit} = useForm(addPhotoHandler, {
        imageUrl: '',
        addCaption: '',
      });

    return(
        <main className='addPhoto'>
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