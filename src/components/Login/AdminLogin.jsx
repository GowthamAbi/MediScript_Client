import { useState } from "react"

export default function () {

  const[name,setName]=useState('')
  const[mail,setMail]=useState('')

const handleChange=(e)=>{
const{id,value}=e.target
id==="name"?setName(value):setMail(value)
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("name:",name,"mail:",mail)
  setMail('')
  setName('')
}

  return (
    <div className='bg-green-200 flex justify-center items-center h-screen '>
      
      <div className='  bg-blue-300 shadow-2xl mx-auto w-auto p-4 rounded'>
        <h1 className='text-center my-4 text-2xl font-bold text-red-500'>Admin Login</h1>
        <form className='flex flex-col ' onSubmit={handleSubmit}>
        <input type="text" id="name" required value={name} onChange={handleChange}  className='outline-0 mb-4' placeholder='Enter Your Name'/>
        <input type="mail"  id="mail" required value={mail}  onChange={handleChange}  placeholder='Enter Your Mail ID' className='outline-0 mb-4'/> 
        <button type="submit"  className='bg-blue-500 rounded-2xl py-2 hover:text-white cursor-pointer  hover:bg-blue-900'>Submit</button>
        </form>
        <div className="flex gap-4 mt-4">
          <h5>You Don't Have Account?</h5><a href="/register/admin">Register</a>

        </div>
      </div>
    </div>
  )
}
