import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{color:"white"}}>
      <ul style={{display:"flex",
        gap: "10px",
      }}>
        <li>
          <NavLink to="/" className={({isActive})=>isActive ? "text-red-500" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact/100"  className={({isActive})=>isActive ? "text-green-500" : ""}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about"  className={({isActive})=>isActive ? "text-green-500" : ""}>About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
