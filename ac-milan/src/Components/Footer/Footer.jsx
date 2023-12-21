import React from 'react'
import puma from '../../Assets/sponsor/puma.png'
import bmw from '../../Assets/sponsor/bmw.png'
import konami from '../../Assets/sponsor/konami.png'
import emirates from '../../Assets/sponsor/emirates.png'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <h2>Partners</h2>
        <div className="pngs">
          <img src={puma} alt="" />
          <img src={bmw} alt="" />
          <img src={emirates} alt="" />
          <img src={konami} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer