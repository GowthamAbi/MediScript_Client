import React from 'react'
import NavBar from '../components/HomePageSection/NavBar'
import Footer from '../components/HomePageSection/Footer'
import { useParams } from 'react-router-dom'

export default function BlogPage() {

  const {id}=useParams()

    const medicineCategory=[
  {
    name: "Analgesics",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966485.png"
  },
  {
    name: "Antipyretics",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966480.png"
  },
  {
    name: "Antibiotics",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966512.png"
  },
  {
    name: "Antiseptics & Disinfectants",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966525.png"
  },
  {
    name: "Antacids & Antiulcer Drugs",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966505.png"
  },
  {
    name: "Antihistamines",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966518.png"
  }]

  return (
    <>
    <div>
        <NavBar/>

        <section>

            {/* Navigate Link */}
            <div className='flex gap-2 cursor-pointer'>
                <a href="/">Home</a><p>{">"}</p><a href={`${id}`}>{id}</a>
            </div>

            {/* Item Category */}
            <div className='h-[200px] mx-4 w-auto rounded-xl bg-[#F1CCD7] flex '>
                <div className='w-32 flex flex-col justify-center items-center'>
                <img src={"src\assets\Empty.jpg"} alt="icon" />
                <h4>Title</h4>
                <p>page</p>
                </div>

                <div className=' py-2  inline-flex gap-2 '>

                    {medicineCategory.map((item,index)=>(
                        <div key={index} className='flex flex-col items-center w-32 bg-white rounded py-4'>
                            <img src={item.image} alt="" className='w-8 ' />
                            <h3 className='text-center'>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>





        </section>

        <Footer/>
    </div>

    </>
  )
}
