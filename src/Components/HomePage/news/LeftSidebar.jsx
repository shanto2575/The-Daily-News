import Link from 'next/link'
import React from 'react'

const LeftSidebar = ({ Categories, ActiveId }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold">All Categories</h2>
            <ul className="flex flex-col gap-3 my-10">
                {
                    Categories.news_category.map(category => {
                        return <li key={category.category_id} className={`${ActiveId === category.category_id && 'bg-pink-700 text-white'} rounded-2xl text-center text-xl font-semibold`}>
                            <Link href={`/category/${category.category_id}`} className='block p-2'>{category.category_name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default LeftSidebar
