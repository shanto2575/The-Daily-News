import Image from 'next/image'
import Link from 'next/link'
import user from '@/assets/u.png'
import NavLink from './NavLink'
const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center gap-4 container mx-auto mt-6'>
                <div></div>
                <ul className='flex justify-between items-center gap-3 text-gray-600'>
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/about-us'}>About</NavLink></li>
                    <li><NavLink href={'/career'}>Career</NavLink></li>
                </ul>
                <div className='flex items-center justify-between gap-3'>
                    <Image src={user} height={40} width={40} alt='user img'></Image>
                    <button className='btn bg-purple-700 text-white block'><Link href={'/login'} >Login</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar