import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={assets.logo} className='logo' alt='logo' />
          <p>Foody is your go-to food delivery app, bringing delicious meals from your favorite 
          restaurants right to your doorstep. Enjoy a wide variety of cuisines and fast, reliable service.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Get in touch</h2>
          <ul>
            <li>075 29 55 301</li>
            <li>foody@info.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 @ GAP-Pathum. All Rights Reserved.</p>
    </div>
  )
}

export default Footer;
