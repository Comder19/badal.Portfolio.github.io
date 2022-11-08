import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Badal</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experience</li>
                    <li>Portfolio</li>

                    <li>testimonials</li>
                </ul>
            </div>
            <button className="button">
                Contact us
            </button>
        </div>
    </div>
  )
}

export default Navbar