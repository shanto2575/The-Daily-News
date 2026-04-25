import React from 'react'
import LoadingPage from './../../../loading';

const LoadingPag = () => {
    return (
        <div className='h-[85vh] flex items-center justify-center'>
            <span className="loading loading-spinner text-xl text-error"></span>
        </div>
    )
}

export default LoadingPag