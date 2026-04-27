'use client'
import Image from 'next/image'
import Link from 'next/link'
import avater from '@/assets/u.png'
import NavLink from './NavLink'
import { authClient } from '@/lib/auth-client'
const Navbar = () => {
    const { data: session,isPending } = authClient.useSession()
    // console.log(session, 'session')

    const user = session?.user
    // console.log(user, 'user')

    return (
        <div>
            <div className='flex justify-between items-center gap-4 container mx-auto mt-6'>
                <div></div>
                <ul className='flex justify-between items-center gap-3 text-gray-600'>
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/about-us'}>About</NavLink></li>
                    <li><NavLink href={'/contact-us'}>Contact</NavLink></li>
                </ul>
                { isPending ? <span className="loading loading-infinity loading-xl text-accent"></span> :
                    user ? <div className='flex items-center justify-between gap-3'>
                        <h2>Hello,{user.name}</h2>
                        <Image src={user.image || avater} height={40} width={40} alt='user img'></Image>
                        <button className='btn bg-purple-700 text-white block' onClick={async()=>await authClient.signOut()}>Logout</button>
                    </div> :
                        <button className='btn bg-purple-700 text-white block'><Link href={'/login'} >Login</Link></button>
                }
            </div> :


        </div>
    )
}

export default Navbar