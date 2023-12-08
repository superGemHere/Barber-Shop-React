import './register.css'

import { useContext } from 'react';
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
  const {registerSubmitHandler, registerErr} = useContext(AuthContext);
  const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
    [RegisterFormKeys.FirstName]: '',
    [RegisterFormKeys.LastName]: '',
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.RepeatPassword]: '',
  })

    return (

        <main className="register">

          {registerErr && 
          <div className="alert1">
            <strong>Attention!</strong> {registerErr}
          </div>
          }
        <div className="register-container">
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
        </div>
      </main>

    );
}