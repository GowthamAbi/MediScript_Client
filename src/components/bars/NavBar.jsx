import React from 'react'
import Profile from '../navBar/Profile'

export default function NavBar() {
  return (
    <>
   <nav className='flex gap-8 mx-auto max-w-6xl py-4 items-center  '>
    <div><h1 className='text-2xl '>MediScript</h1></div>
    <div className='inline-flex items-center gap-2 bg-blue-100 rounded w-auto px-2'>
      <img src="src\assets\search.png" alt="" className='w-4 h-4 cursor-pointer'/>
      <input type="text"  placeholder='Search Medition ,Brand,and More' className='outline-0 w-xl '></input></div>
    <div className='inline-flex gap-2'>
      <img src="src\assets\shopping-cart.png"  className="w-6 h-6" alt=""/>
    <h5>Cart</h5>
    </div>
    <Profile/>
    
    </nav>
    </>
  )
}
