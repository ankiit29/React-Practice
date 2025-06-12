import React from 'react'
import { Outlet } from 'react-router-dom';


import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div style={{color:"white"}}>
      <Link to="/contact/100">TAlk to person1</Link>
      <br />
      <Outlet/>
    </div>
  )
}

export default Contact
