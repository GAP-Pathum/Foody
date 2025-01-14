import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

function AppDownlaod() {
  return (
    <div className='app-download' id='app-download'>
    <p>For Better Experience Downlaod <br/> Foody App</p>
    <div className='app-download-platforms'>
      <img src={assets.play_store} alt='play store' />
      <img src={assets.app_store} alt='app store' />
    </div>
    </div>
  )
}

export default AppDownlaod
