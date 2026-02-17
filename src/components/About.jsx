import React from 'react'

function About() {
    return(
        <>
            <div className='flex text-black justify-center items-center'>
                <div className='about_image mb-50 mt-10'> 
                    <img src="/about_01.jpg" className='rounded-3xl'></img>
                </div>
                <div className='ml-25 mt-[-50px] w-140 text-left'>
                    <p className='font-times font-bold text-2xl'>Welcome to a place where words turn into power.</p>
                    <p className='mt-5'>This channel is dedicated to bringing you the most inspiring and life-changing motivational quotes from the greatest minds in history. Every video is created to ignite your inner fire, boost your confidence, and remind you of your true potential.</p>
                    <p className='mt-5'> Whether you feel lost, tired, or unmotivated — let these words guide you, strengthen you, and push you forward. Because sometimes, a single quote can change everything. Subscribe and start your journey toward a stronger mindset.</p>
                </div>
            </div>
        </>
    )
}

export default About