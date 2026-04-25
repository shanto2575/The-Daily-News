import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex flex-col items-center justify-center gap-4'>
            <h2 className='text-3xl font-bold text-purple-600'>This Page is Not found</h2>
            <Link href={'/'}><button className='btn btn-primary'>Back To Home</button></Link>
        </div>
    )
}

export default NotFoundPage
