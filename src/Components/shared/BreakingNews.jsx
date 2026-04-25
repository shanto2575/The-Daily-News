import React from 'react'
import Marquee from 'react-fast-marquee'

const News = [
    { "id": 1, "title": " Breaking News: Government announces new budget for 2026" },
    { "id": 2, "title": " Breaking News: Heavy rainfall expected across the country" },
    { "id": 3, "title": " Breaking News: New tech park opening in Dhaka next month" },
    { "id": 4, "title": " Breaking News: National cricket team wins series" },
    { "id": 5, "title": " Breaking News: Fuel prices reduced starting tomorrow" }
];
const BreakingNews = () => {
    return (
        <div className='flex items-center justify-between gap-4 py-2 px-3 container mx-auto bg-gray-200 rounded-2xl'>
            <button className='btn bg-red-600 text-white '>Latest News</button>
            <Marquee pauseOnHover={true} speed={50} gradient={false}>
                {
                    News.map(n => (
                        <span key={n.id} className='mx-8'>{n.title}</span>
                    ))
                }
            </Marquee>
        </div>
    )
}

export default BreakingNews