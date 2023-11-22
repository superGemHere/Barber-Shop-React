import './login.css'
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

const LoginFormKeys = {
  EMAIL: 'email',
  PASSWORD: 'password',
}

export default function Login(){
  const {loginSubmitHandler} = useContext(AuthContext)
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    email: '',
    password: '',
  });

    return(

        <main className="login">
        <div className="login-container">
          <form className="login-form" method="POST" onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" name={LoginFormKeys.EMAIL} placeholder="example@abv.bg" onChange={onChange} value={values[LoginFormKeys.EMAIL]} />
            <label htmlFor="password">Password</label>
            <input type="password" name={LoginFormKeys.PASSWORD} placeholder="Enter your password.." onChange={onChange} value={values[LoginFormKeys.PASSWORD]}/>
            <div className="submitBtn">
              <input type="submit" defaultValue="SIGN IN" />
            </div>
            <div className="existingAccount">
              <a href="javascript:void(0)">Don't have an account?</a>
              <a href="#" id="SignUp"> Sign Up</a>
            </div>
          </form></div>
      </main>

    );
}