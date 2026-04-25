import { getNewsDetailsById } from '@/lib/api/data';
import Image from 'next/image';
import Link from 'next/link';
import { CiShare2 } from 'react-icons/ci';
import { FaArrowRight, FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    // console.log(param)
    const newsArray = await getNewsDetailsById(id)
    console.log(newsArray)
    const news = newsArray.find(item => item._id === id);
    return {
        title: news.title,
        description: news.details,
    };
}

const DetailsPages = async ({ params }) => {
    const { id } = await params;
    // console.log(id)
    const news = await getNewsDetailsById(id)
    // console.log(news)
    return (
        <div>
            <div>
                {
                    news.map((news, ind) => {
                        return <div key={ind} className='max-w-4xl mx-auto'>

                            <div className="card bg-base-100 shadow-sm">
                                <div className="card-body">
                                    {/* Author Info */}
                                    <div className='flex justify-between items-center bg-slate-200 p-3 rounded-2xl'>
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
                                    <p className='mt-10'>{news.details}</p>
                                    <Link href={`/category/${news.category_id}`}>
                                        <button className='btn bg-pink-600 text-white'>See Other News For This Category<FaArrowRight></FaArrowRight></button>
                                    </Link>
                                    <div className="divider"></div>
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default DetailsPages