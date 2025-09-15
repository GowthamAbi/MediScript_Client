import React, { useState } from 'react'

export default function CustomerRegister() {
const[userData,setUserData]=useState({
  name:'',mail:"",phone:'',password:''
})

const handleChange=(e)=>{
  const{name,value}=e.target
setUserData((preData)=>({...preData,[name]:value}))

}

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(userData)

}

  return (
    <div className='flex  justify-center items-center h-screen  '>
      <div className='bg-gray-300 shadow-2xl p-4 rounded '>
        <h1 className='text-red-500 text-5xl text-center my-4'>Client Register</h1>
        <form action="" className='flex flex-col space-y-4' onSubmit={handleSubmit}>
          <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder='Enter Your Name' className='outline-0'/>
          <input type="mail" name="mail" value={userData.mail} onChange={handleChange} placeholder='Enter Your mail' className='outline-0'/>
          <input type="phone" name="phone" value={userData.phone} onChange={handleChange} placeholder='Enter Your Phone No' className='outline-0'/>
          <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder='Enter password' className='outline-0'/>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
  )
}
