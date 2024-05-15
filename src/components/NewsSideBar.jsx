import React, { useEffect, useState } from 'react'

const NewsSideBar = () => {
  const [topnews, settopnews] = useState([]);

  const topnewsApi = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7ee4fa0fe3ab4357b779912a2fcc923c`);
    const data = await response.json();
    console.log(data.articles);
    settopnews(data.articles);
  }
  useEffect(() => {
    topnewsApi();
  }, [])

  console.log(topnews);

  return (
    <>
      <div className='p-5'>
        <h3 className='text-8xl font-semibold py-8'>Top News</h3>
        <div>
          {topnews && topnews.map((top, key) => (
            <div key={key} className='my-5 border-b-2 border-spacing-2 px-4 shadow-xl border-red-600'>
              <h4 className='font-normal mb-5'>{top.title}</h4>
              <a href={top.url} target="_blank" rel="noreferrer" className=" text-red-500 text-base pb-2 hover:text-red-700 inline-flex items-center py-1">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default NewsSideBar