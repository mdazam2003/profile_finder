import React from 'react'
import Logo from './Logo'

import { Link, NavLink } from 'react-router-dom'

function Header() {
    return(
        <>
                <nav className='fixed top-0 left-0 bg-white text-black h-15 w-full flex border border-black-600'>
                    <div className='ml-50'>
                        <Logo />
                    </div>
                    <div className='flex items-center cursor-pointer ml-40 mr-40'>
                        <NavLink to='/' className={({isActive}) =>
                            `nav_content ${isActive ? "text-orange-700 font-semibold" : "text-gray-700"}`
                        }>
                            Home
                        </NavLink>

                        <NavLink to='/about' className={({isActive}) =>
                            `nav_content ${isActive ? "text-orange-700 font-semibold" : "text-gray-600"}`
                        }>
                            About
                        </NavLink>

                        <NavLink to='/contact' className={({isActive}) =>
                            `nav_content ${isActive ? "text-orange-700 font-semibold" : "text-gray-600"}`
                        }>
                            Contact Us
                        </NavLink>
                        
                        <NavLink to='/github' className={({isActive}) =>
                            `nav_content ${isActive ? "text-orange-700 font-semibold" : "text-gray-600"}`
                        }>
                            Github
                        </NavLink>
                    
                    </div>
                    <div className='flex items-center mr-50'>
                        <Link to="#">
                            <button className='h-10 mr-2 bg-white text-black flex items-center'>Log in</button>
                        </Link>
                        <Link to='#'>
                            <button className='h-10 bg-orange-600 text-white flex items-center'>Get Started</button>
                        </Link>
                    </div>
                </nav>
        </>
    )
}

export default Header