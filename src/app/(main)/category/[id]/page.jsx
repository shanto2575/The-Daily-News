import LeftSidebar from "@/Components/HomePage/news/LeftSidebar";
import NewsCards from "@/Components/HomePage/news/NewsCards";
import RightSidebar from "@/Components/HomePage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/api/data";
import Image from "next/image";
import error from '@/assets/App-Error.png'

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    // console.log(param)
    const Categories = await getCategories()
    // console.log(Categories.news_category)

    const news = await getNewsByCategoryId(id)
    // console.log(news,'news')

    return (
        <div className="container mx-auto grid grid-cols-12 my-16 gap-5">
            <div className="col-span-3">
                <LeftSidebar Categories={Categories} ActiveId={id}></LeftSidebar>
            </div>
            <div className=" col-span-6">
                <h2 className="text-3xl font-bold">News</h2>
                <div className="space-y-4 my-10">
                    {
                        news.length > 0 ? (
                            news.map(n => {
                                return <NewsCards key={n._id} news={n}></NewsCards>
                            })
                        ) : <>
                        <Image src={error} width={600} height={600} alt='Swimming' className='rounded-3xl w-[50vh] mx-auto'/>
                        <h2 className="text-center my-10 text-2xl font-bold">Data not Founded</h2>
                        </>
                    }
                </div>
            </div>
            <div className=" col-span-3">
                <RightSidebar></RightSidebar>
            </div>
        </div>
    )
}

export default NewsCategoryPage