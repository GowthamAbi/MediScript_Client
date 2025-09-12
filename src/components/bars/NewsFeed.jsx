import React from 'react'

export default function NewsFeed() {

const news=["News 1","News 2","News 3","News 4","News 5"]

  return (
    <div className='bg-white mx-4'>
      <div>
          <div>
            {news.map((news,index)=>(
              <div>
                <img src="" key={index} />
                <h1>{news}</h1>
              </div>
            ))}
          </div>
      </div>
        <div>
           </div>
        </div>
  )
}
