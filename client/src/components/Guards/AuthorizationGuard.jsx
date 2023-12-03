import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

import * as postService from '../../services/postService'


export default function AuthorizationGuard(props){
    const {photoId} = useParams();
    const [photo, setPhoto] = useState({})
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        postService.getOnePhotos(photoId)
        .then(result => {
            setPhoto(result);
        })
    }, [])

    if(photo._ownerId !== userId){
        return <Navigate to='/gallery' />;
    }
    

    return <Outlet />
}