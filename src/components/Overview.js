import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faInstagram,
	faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import './design/over.css';
import {Link} from 'react-router-dom';

function Overview() {
	return (
		<div className='overview'>
			<div className='upperHalf'>
				<div className='socialIcons'>
					<div className='iconCircle'>
						<FontAwesomeIcon icon={faFacebookF} className='icon' />
					</div>
					<div className='iconCircle'>
						<FontAwesomeIcon icon={faInstagram} className='icon' />
					</div>
					<div className='iconCircle'>
						<FontAwesomeIcon icon={faGoogle} className='icon' />
					</div>
				</div>
				<div class='imageContainer'>
						<img src={require('./design/img/stopper.png')} alt='' />
					</div>
				<div class='title'>
					CRIME<span>STOP</span>PER
				</div>


				<div  class='cont'>
				
				<div class='paragraphContainer'>
          <p>
		  The Revolutionary Device That Helps You Secure Your Safety
          </p>
        </div>
		</div>
				
				
			</div>
			<div className='lowerHalf'>
				<div class='texts'>
					<p>
						Welcome to Crimestopper, your trusted companion in times of need. We
						are proud to introduce a groundbreaking IoT device designed to
						enhance your personal safety and provide you with peace of mind at
						the touch of a button.
					</p>

					<p>
						At Crimestopper, we understand the importance of safety in today's
						fast-paced world. Whether you're out for a late-night jog, heading
						home after work, or simply going about your daily routine,
						unforeseen circumstances can arise at any moment.
					</p>
					<p>
						That's where Crimestopper comes in, simplifying the process of
						summoning help and sharing your location with loved ones in
						real-time.
					</p>
					<Link to = '/Login'>
					<button class='button' href='Login.js'>
						GET STARTED
					</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Overview;