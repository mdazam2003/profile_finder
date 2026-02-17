import React from 'react'
import Logo from './Logo'

import { Link } from 'react-router-dom'

function Footer() {
    return(
        <>
            <div className='fixed flex justify-between p-5 bottom-0 left-0 w-screen border border-black bg-white text-black'>
                <div className='ml-60 mt-2'>
                    <Logo />
                </div>

                <div className="flex justify-evenly mr-60">

                    <div className='mr-10'>
                        <p className='font-bold mb-2'>RESOURCES</p>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </div>

                    <div className='mr-10'>
                        <p className='font-bold mb-2'>FOLLOW US</p>
                        <ul>
                            <li><Link to='/github'>Github</Link></li>
                            <li><Link to='#'>Discord</Link></li>
                        </ul>
                    </div>

                    <div className='mr-10'>
                        <p className='font-bold mr-25 mb-2'>LEGAL</p>
                        <ul>
                            <li><Link to='#'>Privacy Policy</Link></li>
                            <li><Link to='#'>Terms & Condition</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer