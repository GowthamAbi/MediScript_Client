import React, { useState } from 'react'

export default function () {
  const[register,setRegister]=useState(false)
    const[arrow,setArrow]=useState(false)
  return (
   <>
   <div className='relative'>
   <div className={`inline-flex items-center  gap-2 hover:bg-blue-300 rounded py-2 px-2 ${arrow&&"bg-blue-400 rounded py-2 px-2"}`} >
    <img src="src\assets\user.png" className='w-6 h-6' alt="Logo"/>
    <div>
    <h4 onClick={()=>setArrow(!arrow)} className='cursor-pointer inline-flex items-center gap-2'>
        Profile {!arrow?<img src='src\assets\down.png' className='w-6 h-8 py-2'/>:
        <img src='src\assets\up-arrow.png'className='w-6 h-8'/>}</h4>
    </div>
   
   </div>
   <div  >
      {arrow&&<ul className= 'absolute bg-white w-[140px]  mt-2  rounded text-center leading-8 cursor-move:bg-white'>
      <li className='cursor-pointer hover:bg-gray-100 px-4 py-2 ' onClick={()=>(setRegister(!register))}>Register</li>
      {register&&<div>
        <li className='cursor-pointer hover:bg-gray-100 px-4 py-2'>Admin</li>
      <li className='cursor-pointer hover:bg-gray-100 px-4 py-2'>Vendor</li>
      <li className='cursor-pointer hover:bg-gray-100 px-4 py-2'>Client</li>
      </div>}
      <li className={`navbar`}>Login</li>
      <li className='cursor-pointer hover:bg-gray-100 px-4 py-2'>Setting</li>

    </ul>}
    </div>
    </div>
   </>
  )
}
