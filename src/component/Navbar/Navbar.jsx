import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo savera-glaze.jpg"
import cart_icon from "../../assets/cart_icon.jpg"

const Navbar = () => {
  const [menu, setMenu] = useState("Home")
  return (
    <div className="navbar">
      <div className='nav-logo'>
        <img src={logo} alt="" height="100px" />
        <p> Savera-Glaze </p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("Home") }}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">Home</Link>
          {menu === "Home" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setMenu("Tea Cups") }}>
          <Link to="/tea-cups" onClick={() => setMenu("Tea Cups")}>Tea Cups</Link>

          {menu === "Tea Cups" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setMenu("Coffee Mugs") }}>
                    <Link to="/Coffee-Mugs" onClick={() => setMenu("Coffee-Mugs")}>coffee Mugs</Link>

          {menu === "Coffee Mugs" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setMenu("Mug with Saucer") }}>
          <Link to = "Mug with Saucer" onClick={() => setMenu("Mug- with - Saucer")}>Mug With Saucer</Link>
          {menu === "Mug with Saucer" ? <hr /> : <></>}
        </li>

      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button> Login </button></Link>
        <Link to="/cart"><img src=
          {cart_icon} alt="" height="80px" /></Link>
        <div className="nav-cart-count"></div>

      </div>
    </div>
  )
}

export default Navbar