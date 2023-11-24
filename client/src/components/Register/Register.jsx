import './register.css'

import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';


const RegisterFormKeys = {
  FirstName: 'firstName',
  LastName: 'lastName',
  Email: 'email',
  Password: 'password',
  RepeatPassword: 'repeatPassword'
}


export default function Register(){
  const {registerSubmitHandler} = useContext(AuthContext);
  const {} = useForm(registerSubmitHandler, {

  })

    return (

        <main className="register">
        <div className="register-container">
          <form className="register-form" method="POST">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" placeholder="Example: John" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" placeholder="Example: Wick" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="example@abv.bg" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password.." />
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input type="password" name="repeatPassword" placeholder="Repeat your password.." />
            <div className="submitBtn">
              <input type="submit" defaultValue="SIGN UP" />
            </div>
            <div className="existingAccount">
              <a href="javascript:void(0)">Already have an account?</a>
              <a href="#" id="SignIn"> Sign In</a>
            </div>
          </form>
        </div>
      </main>

    );
}