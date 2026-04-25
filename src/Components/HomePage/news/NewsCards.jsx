import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiShare2 } from 'react-icons/ci'
import { FaArrowRight, FaEye, FaRegBookmark, FaStar } from 'react-icons/fa'

const NewsCards = ({ news }) => {
    console.log(news)
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    {/* Author Info */}
                    <div className='flex justify-between items-center  bg-slate-200 p-3 rounded-2xl'>
                        <div className='flex gap-3 items-center '>
                            <Image
                                src={news.author?.img || '/fallback-avatar.png'}
                                alt={news.author?.name || 'Author Image'}
                                width={60}
                                height={60}
                                className='rounded-full'
                            />
                            <div>
                                <h2>{news.author.name}</h2>
                                <p>{news.author.published_date}</p>
                            </div>
                        </div>
                        <div className='flex gap-2 justify-between items-center text-2xl'>
                            <CiShare2 />
                            <FaRegBookmark />
                        </div>
                    </div>
                    <h2 className="card-title">{news.title}</h2>
                    <figure>
                        <Image src={news.image_url} width={300} height={300} alt={news.title}
                            className='w-full'
                        />
                    </figure>
                    <p className='line-clamp-2'>{news.details}</p>
                    <Link href={`/news/${news._id}`}>
                        <button className='btn bg-pink-600 text-white'>Read More<FaArrowRight></FaArrowRight></button>
                    </Link>
                    <div className="divider"></div>
                    <div className='flex justify-between items-center '>
                        <div className='flex items-center justify-between gap-3 text-xl'>
                            <FaStar className='text-orange-500'></FaStar>
                            <FaStar className='text-orange-500'></FaStar>
                            <FaStar className='text-orange-500'></FaStar>
                            <FaStar className='text-orange-500'></FaStar>
                            <FaStar className='text-orange-500'></FaStar>
                            <p>{news.rating.number}</p>
                        </div>
                        <div className='flex items-center justify-between gap-3 text-xl'>
                            <FaEye></FaEye>
                            <p>{news.total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCards