import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

import * as postService from '../../services/postService'



export default function AuthorizationGuard(props){
    const {photoId} = useParams();
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const [photo, setPhoto] = useState({});


    useEffect(() => {
        postService.getOnePhotos(photoId)
        .then((result) => {
            setPhoto(result);
            console.log(result)
        })
        .catch(err => console.log(err))
    }, [photoId]);


    console.log(photo)
    if(photo._ownerId != userId){
        return navigate('/gallery');
    }


    return <Outlet />
}