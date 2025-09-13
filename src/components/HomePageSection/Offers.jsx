import React, { useEffect, useState } from 'react'

export default function Offers () {
const image=[
  "https://picsum.photos/id/1018/600/300", "https://picsum.photos/id/1015/600/300", "https://picsum.photos/id/1016/600/300", "https://picsum.photos/id/1019/600/300", "https://picsum.photos/id/1020/600/300"
]

const [index,setIndex]=useState(0)

useEffect(()=>{
  const interval=setInterval(()=>{setIndex((pre)=>(pre+1)%image.length)},3000)
  return ()=>clearInterval(interval)
},[image.length])


  return (
    <div className='h-64 mx-4 overflow-hidden relative'>
      <img src={image[index]} alt="sideshow" className='w-full h-full rounded '/>
      <div className='absolute bottom-2 left-1/2 flex  gap-2.5'>
        {image.map((_,i)=>(
          <div key={i} className={`rounded-full w-3 h-3  ${i===index?"bg-white":"bg-gray-400"}`}></div>
          ))}
      </div>
      <div>
      <div className='absolute left-2 top-1/2'>
        <button className='bg-white rounded-r w-8 h-22 ' onClick={()=>setIndex(index===0?image.length-1:index-1)}>{"<"}</button>
      </div>
      <div className='absolute right-2 top-1/2'>
        <button className='bg-white rounded-l w-8 h-22 ' onClick={()=>setIndex(index===image.length-1?0:index+1)}>{">"}</button>
      </div>
      </div>
    </div>
  )
}
