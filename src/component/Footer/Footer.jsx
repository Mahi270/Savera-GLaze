import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo savera-glaze.jpg"
import instagram_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"
import whatsapp_icon from "../../assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" height="40px" />
        <p>Savera_Glaze</p>
      </div>
      <ul className='footer-links'>
        <li>About</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Company</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" height="30px" />
        </div>
        <div className="footer-icon-container">
          <img src={facebook_icon} alt="" height="30px" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" height="30px" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved</p>
      </div>
    </div>
  )
}
export default Footer