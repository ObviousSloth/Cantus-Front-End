import React from 'react'
import {NavLink} from 'react-router-dom'


const StyledNavbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to='/'
    className={({ isActive }) => (isActive ? 'link active' : 'link')}
    >Home</NavLink>
        <NavLink to='/Music' className={({ isActive }) => (isActive ? 'link active' : 'link')}
    >Music</NavLink>
        <NavLink to='/Profile' className={({ isActive }) => (isActive ? 'link active' : 'link')}
    >Profile</NavLink>
    </nav>
  )
}

export default StyledNavbar