import React, { useState } from 'react';
import './design/register.css';

function Register() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '', // Change 'username' to 'email'
    password: '',
    confirmPassword: '',
    passwordError: '',
  });

  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const getData = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = user;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email, // Change from 'username' to 'email'
        password,
        confirmPassword,
        status: 'Active', // Set default value for "status"
      }),
    };

    try {
      const res = await fetch(
        'https://authentication-9b86c-default-rtdb.firebaseio.com/UserData.json',
        options
      );

      if (res.ok) {
        alert('Message sent');
      } else {
        alert('Error');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while sending data');
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={getData}>
          <input
            type='text'
            name='firstName'
            placeholder='Enter Firstname'
            value={user.firstName}
            onChange={data}
            required
          />
          <input
            type='text'
            name='lastName'
            placeholder='Enter Lastname'
            value={user.lastName}
            onChange={data}
            required
          />
          {/* Removed the username input field */}
          <input
            type='email' // Change from 'text' to 'email'
            name='email' // Change from 'username' to 'email'
            placeholder='Enter Email' // Change from 'Username' to 'Email'
            value={user.email}
            onChange={data}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Enter Password'
            value={user.password}
            onChange={data}
            required
          />
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={user.confirmPassword}
            onChange={data}
            required
          />
          <button onClick={getData}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
