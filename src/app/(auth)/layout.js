import Navbar from '@/Components/shared/Navbar'
import React from 'react'
import { montserrat } from '../layout'

const authLoayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
        <Navbar></Navbar>
        {children}
        </div>
    )
}

export default authLoayout