import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <>
    {/* <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/user-info'>User Info</NavLink>
    </nav> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">
      <Link to='/'>
      <img src={logo} style={{width:"50px",height:"50px"}}></img>
      </Link>
      <NavLink className="navbar-brand" to="/">
       Tutedude
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/user-info"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              User Info
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar