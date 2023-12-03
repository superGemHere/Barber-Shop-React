import { useContext, useEffect } from "react";
import * as authService from "../../services/authService";
import Path from "../../paths";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function () {
    const navigate = useNavigate()
    const {logoutHandler} = useContext(AuthContext)

    useEffect( () => {
        authService.logout()
        .then(() => {
            logoutHandler();
            navigate(Path.Home);
        })
        .catch(() => {
            logoutHandler();
            navigate('/login')
        })
    }, [])


    return null;
}