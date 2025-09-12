import React, { useState } from 'react'

export default function () {
    const[arrow,setArrow]=useState(false)
  return (
   <>
   <div className='inline-flex items-center  gap-2 ' >
    <img src="src\assets\user.png" className='w-6 h-6' alt="Logo"/>
    <div>
    <h4 onClick={()=>setArrow(!arrow)} className='cursor-pointer inline-flex items-center gap-2'>
        Profile {!arrow?<img src='src\assets\down.png' className='w-6 h-8 py-2'/>:
        <img src='src\assets\up-arrow.png'className='w-6 h-8'/>}</h4>
    </div>
   </div>
   </>
  )
}
