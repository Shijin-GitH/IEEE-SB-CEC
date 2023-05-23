import React from 'react'
import"./Footer.css"
import { BsFacebook, BsGlobe2, BsInstagram } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-main'>
        <div className='row row-cols-1 row-cols-lg-5 '>
           <div className='col m-1'>
           <h3 className='footer-heading'>IEEE SB CEC </h3>
            <h6><a href='/' className='nav-link'>HOME</a></h6>
            <h6><a href='/about' className='nav-link'>ABOUT</a></h6>
            <h6><a href='/execom' className='nav-link'>EXECOM</a></h6>
           </div>
           <div className='col m-1'>
           <h3 className='footer-heading'>ABOUT</h3>
            <h6><a href='/about' className='nav-link'>IEEE</a></h6>
            <h6><a href='/events' className='nav-link'>EVENTS</a></h6>
            <h6><a href='https://www.ieee.org/membership/join/index.html' className='nav-link'>JOIN IEEE</a></h6>
            
           </div>
           <div className='col m-1'>
           <h3 className='footer-heading'>ENQUIRY</h3>
            <h6><a href='/contacts' className='nav-link'>CONTACT US</a></h6>
            <h6><a href="mailto:cecieeeofficial@gmail.com" className='nav-link'>WRITE A MAIL</a></h6>
            <h6><a href='/contacts' className='nav-link'>LOCATION</a></h6>
           </div>

           <div className='col m-1'>
        <div className='bottom1'>
        <div className='bot1 nav-link'><a href="https://www.instagram.com/ieee_sb_cec/"><BsInstagram/></a></div>
        <div className='bot1 nav-link'><a href="https://www.facebook.com/IEEECEC/"><BsFacebook/></a></div> 
        <div className='bot1 nav-link'><a href="https://www.linkedin.com/company/cecieee/"><FaLinkedinIn/></a></div> 
        <div className='bot1 nav-link'><a href="https://cecieee.org/"><BsGlobe2/></a></div>  
        <div className='botline1'>@Ieeesbcec</div>
        </div>
      </div>
    </div>
 </div>
            
    

   
  )
}

export default Footer
