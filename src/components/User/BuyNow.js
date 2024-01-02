import React from "react";
import './design/register.css';
import './design/phone.css';

function BuyNow(){
    
    const handleSubmit = async (e) =>{

    }
    return(
        <div className='login-container'>
         <div className='crimestopper-text'>Buy now<span>!</span></div>
          <div className='form-box'>
            <h2>₱500</h2>
            <form onSubmit={handleSubmit}>
            <div className="label">
             <div className="includes"><span>✔</span>Includes Crimestopper Device</div><br />
             <div className="includes"><span>✔</span>Add Emergency Contacts</div><br />
             <div className="includes"><span>✔</span>Button Customization</div><br />
             <div className="includes"><span>✔</span>Tracking Features</div><br /> 
            </div>
            <div className='link-container'><br />
            <button className='button' type='submit' onClick={handleSubmit}>
                Login
            </button>
            </div>
            </form>

          </div>
           
          
        </div>
   
    )
}



export default BuyNow;
