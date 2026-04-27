'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import avater from '@/assets/u.png'
import NavLink from './NavLink'
import { authClient } from '@/lib/auth-client'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    const [open, setOpen] = useState(false)

    return (
        <nav className="border-b">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-purple-700">
                    Dragon News
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/about-us">About</NavLink></li>
                    <li><NavLink href="/contact-us">Contact</NavLink></li>
                </ul>

                {/* Desktop Auth Section */}
                <div className="hidden md:flex items-center gap-3">
                    {isPending ? (
                        <span className="loading loading-infinity loading-md text-accent"></span>
                    ) : user ? (
                        <>
                            <p className="font-semibold">Hi, {user.name}</p>
                            <Image src={user.image || avater} width={40} height={40} alt="user" className="rounded-full"/>
                            <button 
                                className="btn bg-purple-700 text-white"
                                onClick={async () => await authClient.signOut()}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login" className="btn bg-purple-700 text-white">Login</Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-base-200 border-t">
                    <ul className="flex flex-col items-center gap-4 py-6 text-lg">
                        <li onClick={()=>setOpen(false)}><NavLink href="/">Home</NavLink></li>
                        <li onClick={()=>setOpen(false)}><NavLink href="/about-us">About</NavLink></li>
                        <li onClick={()=>setOpen(false)}><NavLink href="/contact-us">Contact</NavLink></li>

                        {isPending ? (
                            <span className="loading loading-infinity loading-md text-accent"></span>
                        ) : user ? (
                            <div className="flex flex-col items-center gap-3">
                                <Image src={user.image || avater} width={50} height={50} alt="user" className="rounded-full"/>
                                <p className="font-semibold">Hi, {user.name}</p>
                                <button 
                                    className="btn bg-purple-700 text-white"
                                    onClick={async () => await authClient.signOut()}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link href="/login" className="btn bg-purple-700 text-white">Login</Link>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar