import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Button, Typography } from '@mui/material';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase/setup';
import './design/phone.css';

function Phone() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [confirmation, setConfirmation] = useState(null); // Initialize confirmation state
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
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
      setSuccess('OTP Verified. Redirecting...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      console.error(err);
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className='Phone'>
      <div className='int'>
        <PhoneInput
          country={'ph'}
          value={phoneNumber}
          onChange={(phoneNumber) => setPhoneNumber('+' + phoneNumber)}
        />
        <Button onClick={sendOtp} sx={{ marginTop: '10px' }} variant='contained'>
          Send OTP
        </Button>
        <div id='recaptcha'></div>
        <br />
        <input
          type='text'
          className='text'
          onChange={(e) => setOtp(e.target.value)}
          placeholder='Enter OTP'
        />
        <br />
        <Button onClick={verifyOtp} variant='contained' color='success'>
          Verify OTP
        </Button>
        {error && <Typography color='error'>{error}</Typography>}
        {success && <Typography color='success'>{success}</Typography>}
      </div>
    </div>
  );
}

export default Phone;
