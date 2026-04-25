import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NotFound from '@/assets/App-Error.png'
import { FaArrowRight } from 'react-icons/fa'

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex flex-col items-center justify-center gap-4'>
            <Image src={NotFound} width={600} height={600} alt='Swimming' className=''/>
            <h2 className='text-3xl font-bold text-purple-600'>This Page is Not found</h2>
            <Link href={'/'}><button className='btn btn-primary'>Back To Home <FaArrowRight/></button></Link>
        </div>
    )
}

export default NotFoundPage
