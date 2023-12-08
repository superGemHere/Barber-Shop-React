import './register.css'

import { useContext, useEffect } from 'react';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';


const RegisterFormKeys = {
  FirstName: 'firstName',
  LastName: 'lastName',
  Email: 'email',
  Password: 'password',
  RepeatPassword: 'repeatPassword'
}


export default function Register(){
  const {registerSubmitHandler, registerErr, registerSuccess,setRegisterSucces} = useContext(AuthContext);
  const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
    [RegisterFormKeys.FirstName]: '',
    [RegisterFormKeys.LastName]: '',
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.RepeatPassword]: '',
  })

  useEffect(() => {
    setRegisterSucces(false)
  }, [])

    return (

        <main className="register">

          {registerErr && 
          <div className="alert1">
            <strong>Attention!</strong> {registerErr}
          </div>
          }
        <div className="register-container">
          {registerSuccess &&
            <div className="success-animation1">
              <svg className="checkmark1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle1" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check1" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            </div>
          }
          {!registerSuccess &&
          <form className="register-form" method="POST" onSubmit={onSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
            type="text"
            name="firstName"
            placeholder="Example: John"
            onChange={onChange}
            values={values[RegisterFormKeys.FirstName]}/>
            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            name="lastName"
            placeholder="Example: Wick"
            onChange={onChange}
            values={values[RegisterFormKeys.LastName]}/>
            <label htmlFor="email">Email</label>
            <input
            type="text"
            name="email"
            placeholder="example@abv.bg"
            onChange={onChange}
            values={values[RegisterFormKeys.Email]}/>

           <label htmlFor="password">Password</label>
            <input
            type="password"
            name="password"
            placeholder="Enter your password.."
            onChange={onChange}
            values={values[RegisterFormKeys.Password]}/>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat your password.."
            onChange={onChange}
            values={values[RegisterFormKeys.RepeatPassword]}/>
            <div className="submitBtn">
              <input type="submit" defaultValue="SIGN UP" />
            </div>
            <div className="existingAccount">
              <p>Already have an account?</p>
              <Link to={'/login'} id="SignIn"> Sign In</Link>
            </div>
          </form>
          }
        </div>
      </main>

    );
}