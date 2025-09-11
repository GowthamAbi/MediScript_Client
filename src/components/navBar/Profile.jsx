import React, { useState } from 'react'

export default function () {
    const[arrow,setArrow]=useState(false)
  return (
   <>
   <div className='inline-flex items-center  gap-2 ' >
    <img src="src\assets\user.png" className='w-6 h-6' alt="Logo"/>
    <div>
    <h4 onClick={()=>setArrow(!arrow)} className='cursor-pointer inline-flex items-center'>
        Profile {!arrow?<img src='src\assets\down-arrow.png' className='w-4 h-4 py-2'/>:
        <img src='src\assets\caret-arrow-up.png'className='w-3 h-3'/>}</h4>
    </div>
   </div>
   </>
  )
}
