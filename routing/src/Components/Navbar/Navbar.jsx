import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/blog'>Blog</Link> </li>
                <li> <Link to='/contact'>Contact Us</Link> </li>
                <li> <Link to='/about' >About</Link> </li>

            </ul>
        </div>
    )
}
