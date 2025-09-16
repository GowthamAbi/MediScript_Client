import React from 'react'
import Profile from '../navBar/Profile'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate=useNavigate()
  return (
    <>
   <nav className='flex gap-8 py-4 justify-around items-center  mx-auto bg-green-100 '>
    <div>
      <a href="/"><img src="src\assets\Logo\1-no.png" alt="MediScript" /></a>
      <h1 className='md:text-2xl cursor-pointer ' onClick={()=>navigate('/')}>MediScript</h1>
      </div>
    <div className='inline-flex items-center gap-2 bg-gray-100  px-2 rounded-2xl'>
      <img src="src\assets\search.png" alt="" className='w-auto h-6 cursor-pointer rounded-2xl'/>
      <input type="text"  placeholder='Search Medition ,Brand,and More' className='outline-0  py-4 w-1 md:w-auto'></input></div>
    <div className='inline-flex gap-2'>
      <img src="src\assets\shopping-cart.png"  className="w-6 h-6" alt=""/>
    <h5>Cart</h5>
    </div>
    <Profile/>
    
    </nav>
    </>
  )
}
