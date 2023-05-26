import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div id="headerDiv">
      <NavLink to="/" activeStyle={{color: 'green'}} end> Home </NavLink> | 
      <NavLink to="/login" activeStyle={{color: 'green'}}> Login </NavLink>
    </div>
  )
}

export default Header