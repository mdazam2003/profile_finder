import { useState } from 'react'
import '../App.css'
import useGithubProfile from './Hook/getGithubProfile'

function Github_02() {
    const [input, setInput] = useState("")
    const [user, setUser] = useState("mdazam2003")

    const data = useGithubProfile(user)

    return (
        <>
            <div className='fixed w-360 left-0 top-20 ml-10 mr-10 p-3 text-xl flex justify-center items-center bg-gray-800'>Github Followers: {data?.followers}</div>
            
            <div>
                <p className='text-black mb-5'>
                    Enter Github Username:-  
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Enter Username'
                        className='p-2 border-2 border-orange-600 rounded ml-2 w-45'>
                    </input> 
                </p>
                <button className='bg-orange-600 text-white mb-4' onClick={() => setUser(input)}>Search</button>
            </div>
            
            <div className='flex justify-center items-center'>
                <div className='h-52 w-52'>
                    <img src={data?.avatar_url} className='object-cover rounded-full border-2 border-orange-600' ></img>
                </div>
            </div>
            <p className='text-black text-2xl mt-2 font-bold'>{data?.login}</p>
        </>
    ) 
}

export default Github_02