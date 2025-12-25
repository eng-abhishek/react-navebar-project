import React from 'react'
import { Link,NavLink,Nav } from 'react-router-dom'

function Navbar() {
  return (
    <>
    {/* <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/user-info'>User Info</Link> */}
    <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/user-info'>User Info</NavLink>
    </nav>
    </>
  )
}

export default Navbar