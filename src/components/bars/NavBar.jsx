import React from 'react'
import Profile from '../navBar/Profile'

export default function NavBar() {
  return (
    <>
   <nav className='flex gap-8 py-4 justify-around items-center  mx-auto bg-white '>
    <div><h1 className='text-2xl '>MediScript</h1></div>
    <div className='inline-flex items-center gap-2 bg-gray-100  w-auto px-2 rounded-2xl'>
      <img src="src\assets\search.png" alt="" className='w-6 h-6 cursor-pointer rounded-2xl'/>
      <input type="text"  placeholder='Search Medition ,Brand,and More' className='outline-0 w-xl py-4'></input></div>
    <div className='inline-flex gap-2'>
      <img src="src\assets\shopping-cart.png"  className="w-6 h-6" alt=""/>
    <h5>Cart</h5>
    </div>
    <Profile/>
    
    </nav>
    </>
  )
}
