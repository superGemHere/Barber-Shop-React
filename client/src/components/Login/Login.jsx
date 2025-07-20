"use client"

import "./login.css"
import useForm from "../../hooks/useForm"
import { useContext, useEffect } from "react"
import AuthContext from "../../contexts/authContext"
import { Link } from "react-router-dom"

const LoginFormKeys = {
  EMAIL: "email",
  PASSWORD: "password",
}

export default function Login() {
  const { loginSubmitHandler, loginErr, loginSucces, setLoginSucces } = useContext(AuthContext)
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    email: "",
    password: "",
  })

  useEffect(() => {
    setLoginSucces(false)
  }, [setLoginSucces])

  return (
    <main className="login">
      <div className="login-container">
        {loginSucces ? (
          <div className="success-animation">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <div className="success-message">Welcome Back!</div>
            <div className="success-description">You have been successfully logged in.</div>
          </div>
        ) : (
          <>
            <div className="login-header">
              <div className="login-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
              </div>
              <h1 className="login-title">Welcome Back</h1>
              <p className="login-subtitle">Sign in to your account to continue</p>
            </div>

            <form className="login-form" method="POST" onSubmit={onSubmit}>
              {loginErr && (
                <div className="alert alert-error">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                  {loginErr}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name={LoginFormKeys.EMAIL}
                  id="email"
                  placeholder="Enter your email"
                  className="form-input"
                  onChange={onChange}
                  value={values[LoginFormKeys.EMAIL]}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name={LoginFormKeys.PASSWORD}
                  id="password"
                  placeholder="Enter your password"
                  className="form-input"
                  onChange={onChange}
                  value={values[LoginFormKeys.PASSWORD]}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Sign In
              </button>

              <div className="form-footer">
                <p>Don't have an account?</p>
                <Link to="/register">Create Account</Link>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  )
}
