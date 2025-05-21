import React from 'react'
import './Header.css'
import imgOne from '../assets/react.svg'

const Header = () => {
  return (
    <div className='headerClass'>

      <div className='leftDiv'>
        <h1>Your Name</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illum doloremque iure quaerat nobis ipsa suscipit nemo alias, provident libero.</p>
      </div>
              <div className='rightDiv'>
      <img src={imgOne} alt="Image not shown" />
      </div>
    </div>
  )
}

export default Header
