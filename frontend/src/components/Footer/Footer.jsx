import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={assets.logo} alt='logo' />
          <p>Foody is your go-to food delivery app, bringing delicious meals from your favorite 
          restaurants right to your doorstep. Enjoy a wide variety of cuisines and fast, reliable service.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-right'>

        </div>
        <div className='footer-content-center'>

        </div>
      </div>
    </div>
  )
}

export default Footer;
