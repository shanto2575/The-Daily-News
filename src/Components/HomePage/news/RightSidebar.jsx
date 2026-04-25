import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const RightSidebar = () => {
    return (
        <div className=''>
            <h2 className='text-2xl font-bold my-4'>Login With</h2>
            <div className='space-y-4'>
                <button className='btn flex justify-between gap-4 items-center text-blue-400 border-blue-400'><FaGoogle></FaGoogle>Login with Google</button>
                <button className='btn flex justify-between gap-4 items-center '><FaGithub></FaGithub>Login with Github</button>
            </div>
        </div>
    )
}

export default RightSidebar
