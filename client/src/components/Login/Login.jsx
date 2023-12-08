import './login.css'
import useForm from '../../hooks/useForm';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/authContext';
import { Link } from 'react-router-dom';

const LoginFormKeys = {
  EMAIL: 'email',
  PASSWORD: 'password',
}

export default function Login(){
  const {loginSubmitHandler, loginErr, loginSucces, setLoginSucces} = useContext(AuthContext);
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    email: '',
    password: '',
  });

  useEffect(() => {
    setLoginSucces(false)
  }, [])
  
    return(

        <main className="login">
          
          {loginErr && 
          <div className="alert">
            <strong>Danger!</strong> {loginErr}
          </div>
          }
        <div className="login-container">
          {loginSucces &&
            <div className="success-animation">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            </div>
          }
          {!loginSucces &&
            <form className="login-form" method="POST" onSubmit={onSubmit}>
              <label htmlFor="email">Email</label>
              <input type="text" name={LoginFormKeys.EMAIL} placeholder="example@abv.bg" onChange={onChange} value={values[LoginFormKeys.EMAIL]} />
              <label htmlFor="password">Password</label>
              <input type="password" name={LoginFormKeys.PASSWORD} placeholder="Enter your password.." onChange={onChange} value={values[LoginFormKeys.PASSWORD]}/>
              <div className="submitBtn">
                <input type="submit" defaultValue="SIGN IN" />
              </div>
              <div className="existingAccount">
                <p>Don't have an account?</p>
                <Link to={'/register'} id="SignUp"> Sign Up</Link>
              </div>
            </form>
          }
          </div>
      </main>

    );
}