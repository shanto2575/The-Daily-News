import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
// import Swimming from '@/assets/Swimming.png'
import Swimming from '../../../assets/swimming.png'
import Class from '@/assets/class.png'
import Play from '@/assets/playground.png'

const RightSidebar = () => {
    return (
        <div className='space-y-4'>
            <div>
                <h2 className='text-2xl font-bold my-4'>Login With</h2>
                <div className='space-y-4'>
                    <button className='btn flex justify-between gap-4 items-center text-blue-400 border-blue-400'><FaGoogle></FaGoogle>Login with Google</button>
                    <button className='btn flex justify-between gap-4 items-center '><FaGithub></FaGithub>Login with Github</button>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-2xl my-4'>Find Us On</h2>
                <div className=' space-y-3'>
                    <button className='btn flex justify-start gap-4 items-center w-full hover:bg-orange-600 hover:text-white'><FaFacebook></FaFacebook> Facebook</button>
                    <button className='btn flex justify-start gap-4 items-center w-full hover:bg-orange-600 hover:text-white'><FaInstagram></FaInstagram>Instragram</button>
                    <button className='btn flex justify-start gap-4 items-center w-full hover:bg-orange-600 hover:text-white'><FaTwitter></FaTwitter>Twitter</button>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-2xl my-4'>Q-Zone</h2>
                <div>
                    <Image src={Swimming} width={600} height={600} alt='Swimming' className=' w-full'/>
                    <Image src={Class} width={600} height={600} alt='Swimming' className=' w-full'/>
                    <Image src={Play} width={600} height={600} alt='Swimming' className=' w-full'/>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
