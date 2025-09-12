import React from 'react'

export default function Cards({item,index,image}) {
  return (
    <div>
        <div> 
            <img className='w-8 h-8' src={item.image} alt="img" />
            <h1 className='text-center '>{item.name}</h1>
        </div>
        
        </div>
  )
}
