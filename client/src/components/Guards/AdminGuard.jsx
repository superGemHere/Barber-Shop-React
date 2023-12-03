import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/authContext";


export default function AdminGuard(props){
    const { isAdmin, isAuthenticated } = useContext(AuthContext);

    if(!isAuthenticated){
        return <Navigate to='/login' />;
    }
    if(!isAdmin){
        return <Navigate to='/' />;
    }

    return <Outlet />
}