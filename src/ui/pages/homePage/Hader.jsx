import React from 'react'
import Navabr from './Navbar'
function Hader() {
  return (
    <div id="main"> 
    <Navabr/>
    <div className='name'>
        <h1><span>Apploud Her</span>
        Pitch Your Project today and be Sponsored Accordingly
        </h1>
        <p className='details'
        >
           Promoting Economic Empowerment of Women At work . Through Responsible Bussiness
        </p>
        <a href='#' className='cv-btn'>Join Us</a>
    </div>
    </div>
  )
}

export default Hader