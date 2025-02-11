import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'
import '../index.css'

const Header = () => {
  return (
    <div className="header">
      <img src={logoSpotify} alt="" />

      <a className="header__link" href="/">
        <h1>Reactify</h1>
      </a>
    </div>
  )
}

export default Header

