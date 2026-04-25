import BreakingNews from '@/Components/shared/BreakingNews'
import Header from '@/Components/shared/Header'
import Navbar from '@/Components/shared/Navbar'
import React from 'react'

const layout = ({children}) => {
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            {children}
        </div>
    )
}

export default layout
