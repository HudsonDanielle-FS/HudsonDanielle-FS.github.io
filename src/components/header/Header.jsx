import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'

const Header = () => {
  return (
    <header>
      <div id='home' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kaden Hudson</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt='' />
        </div>
      </div>
    </header>
  )
}

export default Header