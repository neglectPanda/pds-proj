'use client';
import './Signup.css'
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { seePasswordOne, seePasswordTwo } from '../../public/images/1image.js';

//FUTURE UPDATES
//  > all input fields, if dili complete, then show error

const Signup = () => {
    const [role, setRole] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState); //toggles password visibility
    }

    const preventCutCopyPaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        checkPasswordMatch(e.target.value, confirmPassword);
    }

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        checkPasswordMatch(password, e.target.value);
    }

    const checkPasswordMatch = (pass: string, confirmPass: string) => {
        setPasswordMismatch(pass !== confirmPass);
    }

  return (
    <div className='signup-container'>
        <h1>Signup</h1>

        <form action="">
            <div className="email-container">
                <label htmlFor="signup-email-input">Email</label>
                <input type="email" id="signup-email-input" placeholder='johndoe@gmail.com' required />
            </div>

            <div className="account-name-container">
                <label htmlFor="account name">Account Name</label>
                <input type="text" id="account-name" placeholder='John Doe' required/>
            </div>

            <div className="passwords-container">
                <div className="signup-password-container">
                    <label htmlFor="signup-password-input">Enter Password</label>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        id="signup-password-input"
                        onCut={preventCutCopyPaste}
                        onCopy={preventCutCopyPaste}
                        onPaste={preventCutCopyPaste}
                        onChange={handlePasswordChange}
                        value={password}
                        required
                    />
                </div>

                <div className="confirm-password-container">
                    <label htmlFor="confirm-password-input">Confirm Password</label>
                    <div className="confirm-and-show-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            id='confirm-password-input' 
                            onCut={preventCutCopyPaste}
                            onCopy={preventCutCopyPaste}
                            onPaste={preventCutCopyPaste}
                            onChange={handleConfirmPasswordChange}
                            value={confirmPassword}
                            required
                        />
                        <button type='button' id='show-password-btn' onClick={togglePasswordVisibility}>
                            <img 
                                src={showPassword ? seePasswordTwo.src : seePasswordOne.src} 
                                alt="Toggle Password Visibility" 
                            />
                        </button>
                    </div>
                    {passwordMismatch && (
                        <p className="password-mismatch-msg">Passwords do not match.</p>
                    )}
                </div>
            </div>

            <div className="role-select-container">
                <label htmlFor="role-select">Role</label>
                <select id="role-select" value={role} onChange={handleRoleChange} required>
                    <option value="">Select Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

                    {role === 'admin' && 
                        <p className='warning-msg'>This request might take up 1-2 weeks.</p>
                    }
            </div>

            <button type='submit' id='submit-btn'>Submit</button>
        </form>
        <p className="login-desc">Already have an account? <Link href="/Login">Login Here</Link></p>
    </div>
  )
}

export default Signup