"use client"

import "./register.css"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../contexts/authContext"
import useForm from "../../hooks/useForm"
import { Link } from "react-router-dom"

const RegisterFormKeys = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  Password: "password",
  RepeatPassword: "repeatPassword",
}

export default function Register() {
  const { registerSubmitHandler, registerErr, registerSuccess, setRegisterSucces } = useContext(AuthContext)
  const [passwordStrength, setPasswordStrength] = useState("")

  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.FirstName]: "",
    [RegisterFormKeys.LastName]: "",
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.RepeatPassword]: "",
  })

  useEffect(() => {
    setRegisterSucces(false)
  }, [setRegisterSucces])

  const checkPasswordStrength = (password) => {
    if (password.length < 4) return "weak"
    if (password.length < 6) return "fair"
    if (password.length < 8) return "good"
    return "strong"
  }

  const handlePasswordChange = (e) => {
    onChange(e)
    const strength = checkPasswordStrength(e.target.value)
    setPasswordStrength(strength)
  }

  return (
    <main className="register">
      <div className="register-container">
        {registerSuccess ? (
          <div className="success-animation">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <div className="success-message">Account Created!</div>
            <div className="success-description">
              Welcome to Compass Barber Shop. You can now sign in to your account.
            </div>
          </div>
        ) : (
          <>
            <div className="register-header">
              <div className="register-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
                </svg>
              </div>
              <h1 className="register-title">Create Account</h1>
              <p className="register-subtitle">Join Compass Barber Shop community</p>
            </div>

            <form className="register-form" method="POST" onSubmit={onSubmit}>
              {registerErr && (
                <div className="alert alert-error">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                  {registerErr}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    className="form-input"
                    onChange={onChange}
                    value={values[RegisterFormKeys.FirstName]}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    className="form-input"
                    onChange={onChange}
                    value={values[RegisterFormKeys.LastName]}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  className="form-input"
                  onChange={onChange}
                  value={values[RegisterFormKeys.Email]}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Create a strong password"
                  className="form-input"
                  onChange={handlePasswordChange}
                  value={values[RegisterFormKeys.Password]}
                  required
                />
                {values[RegisterFormKeys.Password] && (
                  <div className="password-strength">
                    <div className={`strength-bar strength-${passwordStrength}`}>
                      <div className="strength-fill"></div>
                    </div>
                    <div className="strength-text">Password strength: {passwordStrength}</div>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="repeatPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder="Repeat your password"
                  className="form-input"
                  onChange={onChange}
                  value={values[RegisterFormKeys.RepeatPassword]}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Create Account
              </button>

              <div className="form-footer">
                <p>Already have an account?</p>
                <Link to="/login">Sign In</Link>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  )
}
