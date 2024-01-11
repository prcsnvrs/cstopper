import React, { useState } from 'react';
import './design/register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Typography } from '@mui/material';
import { RecaptchaVerifier, signInWithPhoneNumber, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/setup';
import { MdEmail } from 'react-icons/md';

function Register() {
  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState(true);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    passwordError: '',
    emailError: '',
  });

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Custom validation for the email field
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        // Set an error message or handle invalid email
        setUser((prevUser) => ({
          ...prevUser,
          emailError: 'Invalid email address',
        }));
      } else {
        setUser((prevUser) => ({
          ...prevUser,
          emailError: '', // Clear email error when changing email
        }));
      }
    }

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
      passwordError:
        name === 'confirmPassword' && prevUser.password !== value
          ? "Passwords don't match"
          : '',
    }));
  };

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      // Handle user creation success
      console.log('User created:', userCredential.user);
      // Additional steps if necessary, e.g., saving user data to localStorage
      localStorage.setItem('token', userCredential.user.accessToken);
      localStorage.setItem('user', JSON.stringify(userCredential.user));
      navigate('/'); // Redirect after successful registration
    } catch (error) {
      // Handle errors during user creation
      console.error('Error creating user:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      setUser((prevUser) => ({
        ...prevUser,
        passwordError: "Passwords don't match",
      }));
      return;
    }
    console.log(user);
    setShowSignUp(false);
    setShowOTP(true);
  };

  const sendData = async () => {
    try {
      const { firstName, lastName, password, phoneNumber, email } = user;

      // Extract numeric part of the phone number and replace '+63' with '0'
      const numericPhoneNumber = phoneNumber.replace(/^\+63/, '0');

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          password,
          phoneNumber: numericPhoneNumber, // Use the numeric part only
          email, // Include email in the request
          status: 'Active',
          role: 'User',
        }),
      };

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

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        user.phoneNumber,
        recaptcha
      );
      setConfirmation(confirmationResult);
    } catch (err) {
      console.error(err);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await confirmation.confirm(otp);
      console.log(data);
      setError('');
      sendData();
      setSuccess('OTP Verified. Redirecting...');
      setTimeout(() => {
        navigate('/success');
      }, 2000);
      handleSignup();
    } catch (err) {
      console.error(err);
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className='registration-container'>
      <div className='crimestopper-text'>CRIME<span>STOP</span>PER</div>
      {showSignUp && !showOTP && (
        <div className='form-box'>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
              <FontAwesomeIcon icon={faUser} className='input-icon' />
              <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder='First Name'
                required
                value={user.firstName}
                onChange={handleChange}
                className='input-field'
              />
            </div>
            <div className='input-container'>
              <FontAwesomeIcon icon={faUser} className='input-icon' />
              <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Last Name'
                required
                value={user.lastName}
                onChange={handleChange}
                className='input-field'
              />
            </div>
            <div className='input-container'>
              <MdEmail className='input-icon' />
              <input
                type='text' // Change from 'email' to 'text'
                id='email'
                name='email'
                placeholder='Email'
                required
                value={user.email}
                onChange={handleChange}
                className={`input-field ${user.emailError ? 'error' : ''}`}
              />
            </div>
            {user.emailError && (
              <p className='error-message'>{user.emailError}</p>
            )}
            {user.passwordError && (
              <p className='error-message'>{user.passwordError}</p>
            )}
            <div className='input-container'>
              <FontAwesomeIcon icon={faLock} className='input-icon' />
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                required
                value={user.password}
                onChange={handleChange}
                className='input-field'
              />
            </div>
            <div className='input-container'>
              <FontAwesomeIcon icon={faLock} className='input-icon' />
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm Password'
                required
                value={user.confirmPassword}
                onChange={handleChange}
                className='input-field'
              />
            </div>
            <div id='recaptcha'></div>
            <button className='button' type='submit'>
              Register
            </button>
          </form>
        </div>
      )}
      {!showSignUp && (
        <div className='form-box'>
          <h2>OTP Verification</h2>
          <div className='int'>
            <PhoneInput
              country={'ph'}
              value={user.phoneNumber}
              onChange={(phoneNumber) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  phoneNumber: '+' + phoneNumber,
                }))
              }
            />
            <button className='button' onClick={sendOtp}>
              Send
            </button>
            <div id='recaptcha'></div>
            <br />
            <input
              type='text'
              className='text'
              onChange={(e) => setOtp(e.target.value)}
              placeholder='Enter OTP'
            />
            <br />
            <button className='button' onClick={verifyOtp}>
              Confirm
            </button>
            {error && <Typography color='error'>{error}</Typography>}
            {success && <Typography color='success'>{success}</Typography>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
