import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="d-flex justify-content-around">

            <NavLink className="m-3" to="/home"> Home </NavLink>

            <NavLink className="m-3" to="/aboutUs"> About Us </NavLink>

            <NavLink className="m-3" to="/account"> Account</NavLink>

            <NavLink className="m-3" to="/products"> Products</NavLink>

            <NavLink className="m-3" to="/login"> Log In </NavLink>

        </div>
    )
}

export default NavBar
