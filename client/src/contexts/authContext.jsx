import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService.js'
import * as validate from '../utils/validate.js'
import Path from "../paths";
import usePersistedState from "../hooks/userPersistedState.js";

const AuthContext = createContext();




export const AuthProvider = ({
    children,
}) => {
    
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const [loginSucces, setLoginSucces] = useState(false);
    const [registerSuccess, setRegisterSucces] = useState(false);
    const [loginErr, setLoginErr] = useState('');
    const [registerErr, setRegisterErr] = useState('');
  
  
    const loginSubmitHandler = async(values) => {
      try{
        validate.login(values);
        const result = await authService.login(values.email, values.password);
        
        if(result.status == 403){
          throw result;
        }else{
         setLoginSucces(true);
         setTimeout(() => {

           setAuth(result);
           localStorage.setItem('accessToken', result.accessToken)
          navigate(Path.Home);
         }, 2000);
        }
    
    
        // navigate(Path.Home)

      }catch(err){
        setLoginErr(err.message);
        setTimeout(()=> {
          setLoginErr('');
        }, 2000)
        return err.message;
      }
    }
    
    
    const registerSubmitHandler = async (values) =>{

      try {
        validate.register(values);
        
        let username = `${values.firstName} ${values.lastName}`
        
        const result = await authService.register(values.firstName, values.lastName, values.email, values.password, username);
        
        if(result.status == 403){
          throw result;
        }else{
          setRegisterSucces(true);
          setTimeout(() => {
 
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
           navigate(Path.Home);
          }, 2000);
        }
        
      } catch (err) {
        setRegisterErr(err.message);
        setTimeout(()=> {
          setRegisterErr('');
        }, 2000)
        return err.message;
      }
    }
  
    const logoutHandler = () => {
      setAuth({})
      localStorage.removeItem('accessToken')
  
      navigate(Path.Home)
      
    }

    const isAdmin = auth._id === '60f0cf0b-34b0-4abd-9769-8c42f830dffc';
  
    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      email: auth.email,
      isAuthenticated: !!auth.accessToken,
      userId: auth._id,
      username: auth.username,
      isAdmin: isAdmin,
      loginErr: loginErr,
      registerErr: registerErr,
      loginSucces: loginSucces,
      setLoginSucces: setLoginSucces,
      registerSuccess: registerSuccess,
      setRegisterSucces: setRegisterSucces
    }
    
    
    return (
        <AuthContext.Provider value={values} >
            {children}  
        </AuthContext.Provider>
    )
}
AuthContext.displayName = 'AuthContext';
export default AuthContext;
