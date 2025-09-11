import React from 'react'
import Profile from '../navBar/Profile'

export default function NavBar() {
  return (
    <>
   <nav className='flex gap-8 mx-auto max-w-6xl py-2 '>
    <div>MediScript</div>
    <div className='inline-flex items-center gap-2 bg-blue-100 rounded w-auto'>
      <img src="src\assets\search.png" alt="" className='w-4 h-4 cursor-pointer'/>
      <input type="text"  placeholder='Search Medition ,Brand,and More' className='outline-0 w-xl '></input></div>
    <div>Cart</div>
    <Profile/>
    
    </nav>
    </>
  )
}
