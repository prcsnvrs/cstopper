import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { MdEmail } from 'react-icons/md';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleLogin = (role) => {
    // You can add any additional validation or checks here
    // For now, let's simply navigate to the Dashboard based on the selected role
    navigate(`/${role.toLowerCase()}-dashboard`);
  };

  return (
    <div className='login-container'>
      <div className='crimestopper-text'>CRIME<span>STOP</span>PER</div>
      <div className='form-box'>
        <h2>Login</h2>
        <div className='input-container'>
          <MdEmail className='input-icon' />
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Email'
            value={user.email}
            onChange={handleChange}
            className='input-field'
          />
        </div>
        <div className='input-container'>
          <FontAwesomeIcon icon={faLock} className='input-icon' />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            value={user.password}
            onChange={handleChange}
            className='input-field'
          />
        </div>
        <button className='button highlight' type='button' onClick={() => navigate('/userdashboard')}>
          Login as User
        </button>
        <button className='button highlight' type='button' onClick={() => navigate('/admindashboard')}>
          Login as Admin
        </button>
        <button className='button highlight' type='button' onClick={() => navigate('Police')}>
          Login as Police
        </button>
        <div className='link-container'>
          <p className='forgot-password-text' onClick={() => navigate('/forgotPassword')}>
            Forgot Password?
          </p>
          <p className='register-text' onClick={() => navigate('/register')}>
            Don't have an account? Register
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
