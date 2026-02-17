import React from 'react'
import { useParams } from 'react-router-dom'

function Myparams() {

    const { id } = useParams()
    return (
        <>
            <div className='fixed w-360 left-0 top-20 ml-10 mr-10 p-3 text-xl flex justify-center items-center bg-gray-800'>My Params: {id}</div>
        </>
    )
}

export default Myparams