import React from 'react'
import '../App.css'
import { MdEmail } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <div className='flex justify-center items-center mb-15'>
                <div className="first-div mr-8 bg-gray-300">
                    <h1 className='font-bold mt-3 mb-3'>Get in touch</h1>
                    <p className='font-comic'>Fill this form to join the Community</p>
                    
                    <p className='flex items-center gap-4 mt-6'>
                        <FaMapMarkerAlt className='text-orange-600 text-2xl'/>
                        South Baksara Village Road, Howrah-711110, West Bengal, India
                    </p>

                    <p className='flex items-center gap-2 mt-4'>
                        <FaPhone className='text-orange-600 text-2xl rotate-90'/>
                        +91 8100378463
                    </p>

                    <p className='flex items-center gap-2 mt-4'>
                        <MdEmail className='text-orange-600 text-2xl'/>
                        mohammadazam72535@gmail.com
                    </p>
                </div>

                <div>
                    <form className='first-div font-semibold border border-orange-200'>
                        <div className='mb-2'>
                            <label className='block mb-1'>Full Name</label>
                            <input type='text' placeholder='cristiano ronaldo' className='w-full'/>
                        </div>
                        
                        <div className='mb-2'>
                            <label className='block mb-1'>Contact Number</label>
                            <input type='text' placeholder='xxxxxxxxxx' className='w-full'/>
                        </div>
                        
                        <div className='mb-2'>
                            <label className='block mb-1'>Email ID</label>
                            <input type='text' placeholder='example@gmail.com' className='w-full mb-2'/>    
                        </div>                    
                        <Link to='#'>
                            <button className='bg-orange-600 text-white'>Submit</button>
                        </Link>
                    </form>
                </div>

                

            </div>
        </>
    )
}

export default Contact