import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Typography } from '@mui/material';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase/setup';
import './design/phone.css';
import './design/register.css';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showVerifyOTP, setShowVerifyOTP] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
      setConfirmation(confirmationResult);
      setShowVerifyOTP(true);
    } catch (err) {
      console.error(err);
      setError('Failed to send OTP. Please try again.');
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await confirmation.confirm(otp);
      console.log(data);
      setError('');
      setSuccess('OTP Verified. Resetting password...');
      setShowResetPassword(true);
    } catch (err) {
      console.error(err);
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleResetPassword = async () => {
    try {
      // Ensure newPassword is not empty
      if (!newPassword) {
        setError('Please enter a new password');
        return;
      }
  
      // Call the resetPassword function
      await resetPassword(phoneNumber, newPassword);
  
      // For demonstration purposes, I'm just navigating to the success page
      setSuccess('Password successfully reset. Redirecting to success...');
      setTimeout(() => {
        navigate('/success');
      }, 2000);
    } catch (err) {
      console.error(err);
      setError('Failed to reset password. Please try again.');
    }
  };
  

  const resetPassword = async (phoneNumber, newPassword) => {
    try {
      // Fetch user data based on the provided phoneNumber
      const userDataResponse = await fetch(
        `https://iot-crimestopper-default-rtdb.firebaseio.com/UserData.json?orderBy="phoneNumber"&equalTo="${phoneNumber}"`
      );
  
      if (!userDataResponse.ok) {
        throw new Error('Error fetching user data');
      }
  
      const userData = await userDataResponse.json();
  
      // Assuming there is only one user with the given phoneNumber
      const userId = Object.keys(userData)[0];
      const user = userData[userId];
  
      // Update the user's password
      const updatedUser = { ...user, password: newPassword };
  
      const updateOptions = {
        method: 'PATCH', // Use PATCH to update only the password field
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          [userId]: updatedUser,
        }),
      };
  
      const updateRes = await fetch(
        'https://iot-crimestopper-default-rtdb.firebaseio.com/UserData.json',
        updateOptions
      );
  
      if (!updateRes.ok) {
        throw new Error('Error updating password');
      }
  
      alert('Password updated successfully');
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while updating password');
    }
  };
  

  return (
    <div className='forgot-password-container'>
      <div className='crimestopper-text'>CRIME<span>STOP</span>PER</div>

      {showResetPassword && (
        <div className='form-box'>
          <h2>Reset Password</h2>
          <div className='int'>
            <input
              type='password'
              className='text'
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder='Enter new password'
            />
            <br />
            <button className='button' onClick={handleResetPassword}>
              Reset Password
            </button>
            {error && <Typography color='error'>{error}</Typography>}
            {success && <Typography color='success'>{success}</Typography>}
          </div>
        </div>
      )}

      {showVerifyOTP && !showResetPassword && (
        <div className='form-box'>
          <h2>Verify OTP</h2>
          <div className='int'>
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

      {!showVerifyOTP && !showResetPassword && (
        <div className='form-box'>
          <h2>Forgot Password</h2>
          <div className='int'>
            <PhoneInput
              country={'ph'}
              value={phoneNumber}
              onChange={(number) => setPhoneNumber('+' + number)}
            />
            <button className='button' onClick={sendOtp}>
              Send OTP
            </button>
            <div id='recaptcha'></div>
            {error && <Typography color='error'>{error}</Typography>}
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
