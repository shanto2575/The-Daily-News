import Navbar from '@/Components/shared/Navbar'
import React from 'react'
import { montserrat } from '../layout'
import { ToastContainer } from 'react-toastify'

const authLoayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
        <Navbar></Navbar>
        {children}
        <ToastContainer />
        </div>
    )
}

export default authLoayout