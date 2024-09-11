'use client';
import './SignupLogin.css'
import React from 'react';
import { useState } from 'react';

const Signup = () => {
    const [role, setRole] = useState('');

    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    }

  return (
    <div className='signup-container'>
        <h1>Signup</h1>

        <div className="email-container">
            <label htmlFor="signup-email-input">Email</label>
            <input type="email" id="signup-email-input" placeholder='johndoe@gmail.com' />
        </div>

        <div className="account-name-container">
            <label htmlFor="account name">Account Name</label>
            <input type="text" id="account-name" placeholder='John Doe'/>
        </div>

        <div className="passwords-container">
            <div className="signup-password-container">
                <label htmlFor="signup-password-container">Enter Password</label>
                <input type="password" id="signup-password-container"/>
            </div>

            <div className="confirm-password-container">
                <label htmlFor="confirm-password-input">Confirm Password</label>
                <input type="password" id='confirm-password-input' />
            </div>
        </div>

        <div className="role-select-container">
            <label htmlFor="role-select">Role</label>
            <select id="role-select" value={role} onChange={handleRoleChange}>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="Admin">Admin</option>

                {role === 'admin' && 
                    <p className='warning-msg'>This request might take up 1-2 weeks.</p>
                }
            </select>
        </div>
    </div>
  )
}

export default Signup