import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import NewsSideBar from './NewsSideBar';
import SearchBar from './SearchBar';

const NewsListingPage = () => {

    const [news, setnews] = useState([]);
    const [loading, setLoading] = useState(false);
    const defaultQuery = 'technology';


    const newsApi = async (query) => {
        setLoading(true);
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=7ee4fa0fe3ab4357b779912a2fcc923c`);
        const data = await response.json();
        let newsdata = data.articles;
        // console.log(data.articles)
        newsdata.sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
        console.log("this is data")
        console.log(newsdata)
        setnews(newsdata);
        setLoading(false);
    }

    useEffect(() => {
        newsApi(defaultQuery);
    }, []);

    // console.log(news);

    return (
        <>
            <header className="bg-black text-white p-10">
                <nav className="px-20 ">
                    <h1 className='pb-10 lg:text-3xl lg:font-bold md:text-2xl'>
                        <span className='text-red-600'>YM</span>NewsPage</h1>
                    <SearchBar onSearch={newsApi} />
                </nav>
            </header>

            <div className='flex flex-col lg:flex-row gap-10'>
                {loading ? (
                    <p className="text-gray-600">Loading...</p>
                ) : (
                    <NewsCard news={news} />
                )}
                <div>
                    <NewsSideBar />
                </div>
            </div>
        </>
    )
}

export default NewsListingPage
