import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService.js'
import Path from "../paths";
import usePersistedState from "../hooks/userPersistedState.js";

const AuthContext = createContext();



export const AuthProvider = ({
    children,
}) => {
    
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
  
  
    const loginSubmitHandler = async(values) => {
      const result = await authService.login(values.email, values.password);
  
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken)
  
      navigate(Path.Home)
    }
    
    
    const registerSubmitHandler = async (values) =>{
      console.log(values)
      let username = `${values.firstName} ${values.lastName}`

      const result = await authService.register(values.firstName, values.lastName, values.email, values.password, username);
  
      setAuth(result)
      localStorage.setItem('accessToken', result.accessToken)
  
      navigate(Path.Home)
    }
  
    const logoutHandler = () => {
      setAuth({})
      localStorage.removeItem('accessToken')
  
      navigate(Path.Home)
  
    }
  
    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      email: auth.email,
      isAuthenticated: !!auth.accessToken,
      userId: auth._id,
      username: auth.username
    }
    
    
    return (
        <AuthContext.Provider value={values} >
            {children}  
        </AuthContext.Provider>
    )
}
AuthContext.displayName = 'AuthContext';
export default AuthContext;
