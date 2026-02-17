import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='flex justify-center items-center text-black font-bold '>
                <div className='home_image mt-25 mr-30'>
                    <img src="/home_02.jpeg"></img>
                </div>
                <div className='mr-15 mt-25'>
                    <p className='text-[28px]'>Subscribe Now!!</p>
                    <p className='text-[17px] ml-16 mt-[-5px]'>Quotes Motivation</p>
                    <button className='ml-26 mt-4 h-10 bg-orange-600 text-white flex items-center'>Subscribe</button>
                </div>
            </div>
            <div className='home_image flex items-center justify-center ml-50'>
                <img src="/home_01.jpeg"></img>
            </div>
            <h1 className='flex justify-center text-black mb-35 ml-5 font-bold'>Motivational Quotes Channel</h1>
        </>
    )
}

export default Home