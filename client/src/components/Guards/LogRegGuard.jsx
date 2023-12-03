import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/authContext";


export default function LogRegGuard(props){
    const { isAuthenticated } = useContext(AuthContext);

    if(isAuthenticated){
        return <Navigate to='/' />;
    }

    return <Outlet />
}