import React from 'react'
import './Login.css';
import Link from 'next/link';

const Login = () => {
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form action="">
        <div className="login-email-container">
          <label htmlFor="login-email-input">Email</label>
          <input type="email" id="login-email-input" placeholder="johndoe@gmail.com" />
        </div>
        <div className="login-password-container">
          <label htmlFor="login-password-input">Enter Password</label>
          <input type="password" id="login-password-input" />
        </div>
        <button type="button" id='login-btn'>Login</button>
      </form>
      <p className="signup-msg">Dont have an account? <Link href="/Signup">Signup Here</Link></p>
    </div>  
  )
}

export default Login