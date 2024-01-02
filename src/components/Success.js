import React from 'react';
import './design/register.css';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className='registration-container'>
      <div className='crimestopper-text'>CRIME<span>STOP</span>PER</div>
      <div className='form-box'>
        <div class='image'>
          <img src={require('./design/img/check.png')} alt='' />
        </div>
        <div className='ver'>
          <h2>Success!</h2>
        </div>
        <h4>Congratulations! You have been successfully authenticated!</h4>
        <Link to='/'>
          <button className='button'>
            CONFIRM
          </button>
        </Link>
      </div>
    </div>



  );
}

export default Success;
