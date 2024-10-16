import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li> <Link>Home</Link> </li>
                <li> <Link>Blog</Link> </li>
                <li> <Link>Contact Us</Link> </li>
                <li> <Link>About</Link> </li>

            </ul>
        </div>
    )
}
