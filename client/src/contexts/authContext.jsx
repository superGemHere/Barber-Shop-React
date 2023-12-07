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
    const [loginErr, setLoginErr] = useState('');
    const [registerErr, setRegisterErr] = useState('');
  
  
    const loginSubmitHandler = async(values) => {
      try{
        
        if(values.email === ''){
          throw new Error('Email field cannot be empty');
        }

        if(values.password === ''){
          throw new Error('Password field cannot be empty');
        }
        
        const result = await authService.login(values.email, values.password);
        
        if(result.status == 403){
          throw result;
        }
    
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken)
    
        navigate(Path.Home)

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
        if(values.firstName === ''){
          throw new Error('First name field cannot be empty');
        }

        if(values.lastName === ''){
          throw new Error('Last name field cannot be empty');
        }

        if(values.email === ''){
          throw new Error('Email field cannot be empty');
        }

        if(!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
          throw new Error('Email is not valid');
        }

        if(values.password === ''){
          throw new Error('Password field cannot be empty');
        }
        if(values.password.length < 5){
          throw new Error('Password length must be at least 5 chars long');
        }

        if(values.reeatPassword === ''){
          throw new Error('You must repeat the password');
        }

        if(values.repeatPassword !== values.password){
          throw new Error('Passwords mismatch!');
        }
        
        
        
        let username = `${values.firstName} ${values.lastName}`
        
        const result = await authService.register(values.firstName, values.lastName, values.email, values.password, username);
        
        if(result.status == 403){
          throw result;
        }
        
        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken)
    
        navigate(Path.Home)
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
    }
    
    
    return (
        <AuthContext.Provider value={values} >
            {children}  
        </AuthContext.Provider>
    )
}
AuthContext.displayName = 'AuthContext';
export default AuthContext;
