import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/blog'>Blog</Link> </li>
                <li> <Link>Contact Us</Link> </li>
                <li> <Link>About</Link> </li>

            </ul>
        </div>
    )
}
