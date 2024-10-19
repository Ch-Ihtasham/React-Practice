import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul className='flex gap-7'>
                <li> <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-600' : 'text-black'} `} to='/'>Home</NavLink> </li>
                <li> <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-600' : 'text-black'}`} to='/blog'>Blog</NavLink> </li>
                <li> <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-600' : 'text-black'}`} to='/contact'>Contact Us</NavLink> </li>
                <li> <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-600' : 'text-black'}`} to='/about' >About</NavLink> </li>

            </ul>
        </div>
    )
}
