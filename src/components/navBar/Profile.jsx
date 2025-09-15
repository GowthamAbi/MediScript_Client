import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {
  const[register,setRegister]=useState(false)
    const[login,setLogin]=useState(false)

    const[arrow,setArrow]=useState(false)
    const navigate=useNavigate()
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
   <div  className='absolute' >
      {arrow&&<ul className= 'absolute bg-white w-[140px] scroll mt-2  rounded text-center leading-8 cursor-move:bg-white'>
      <li className='cursor-pointer hover:bg-gray-100 px-4 py-2 ' onClick={()=>(setRegister(!register))}>Register</li>
      {register&&<div>
        <li className='cursor-pointer bg-gray-400 hover:bg-gray-100 px-4 py-2' onClick={()=>navigate('/register/admin')}>Admin</li>
      <li className='cursor-pointer bg-gray-400 hover:bg-gray-100 px-4 py-2' onClick={()=>navigate('/register/vendor')}>Vendor</li>
      <li className='cursor-pointer bg-gray-400 hover:bg-gray-100 px-4 py-2' onClick={()=>navigate('/register/client')}>Client</li>
      </div>}
      <li className='cursor-pointer hover:bg-gray-100 px-4 py-2' onClick={()=>(setLogin(!login))} >Login</li>
            {login&&<div>
        <li className='cursor-pointer bg-gray-400 hover:bg-gray-100 px-4 py-2' onClick={()=>navigate('/login/admin')}>Admin</li>
      <li className='cursor-pointer bg-gray-400 hover:bg-gray-100 px-4 py-2' onClick={()=>navigate('/login/vendor')}>Vendor</li>
      <li className='cursor-pointer bg-gray-400 hover:bg-gray-100 px-4 py-2' onClick={()=>navigate('/login/client')}>Client</li>
      </div>}
      <li className='cursor-pointer hover:bg-gray-100 px-4 py-2'>Setting</li>

    </ul>}
    </div>
    </div>
   </>
  )
}
