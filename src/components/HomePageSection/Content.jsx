import React from 'react'
import EmptyImg from "../../assets/Empty.jpg";

export default function Content() {
  const i=6
const medicines = [
  { name: "Analgesics", image: EmptyImg },
  { name: "Antipyretics", image: EmptyImg },
  { name: "Antibiotics", image: EmptyImg },
  { name: "Antiseptics ", image: EmptyImg },
  { name: "Antacids", image: EmptyImg },
  { name: "Disinfectants", image: EmptyImg },
  { name: "Cough", image: EmptyImg },
  { name: "Vitamins & Minerals", image: EmptyImg },
  { name: "Sedatives", image: EmptyImg },
  { name: "Hypnotics", image: EmptyImg },
  { name: "Antidiabetic Drugs", image: EmptyImg },
  { name: "Antiulcer Drugs", image: EmptyImg },
  { name: "Diuretics", image: EmptyImg },
  { name: "Cardiac Drugs", image: EmptyImg },
  { name: "Anticancer Drugs", image: EmptyImg },
  { name: "Cold Medicines", image: EmptyImg },
  { name: "Antimalarials", image: EmptyImg },
  { name: "Antifungal Drugs", image: EmptyImg },
  { name: "Antiviral Drugs", image: EmptyImg },
  { name: "Steroids", image: EmptyImg }
];



  return (
    <div className='mx-4 flex flex-col '>
        {/*Emergency Items*/}
        <section className='bg-green-100  my-4'>
          <h1 className='text-red-600 text-center text-2xl py-4  ' >Emergency Items</h1>
          <div className='inline-flex gap-4 flex-wrap m-4 justify-around'>
              {medicines.map((item,index)=>(
                <div key={index} className=' items-center  overflow-hidden w-30 hover:shadow-2xl rounded-xl cursor-pointer hover:border'>

                    <img src={item.image} className=' rounded-t'/>
                    <h3 className='text-wrap  text-center '>{item.name}</h3>
                </div>
              ))}
          </div>

        </section>

        {/*Regular Items*/}
        <section className='bg-green-100 my-4'>
          <h1 className='text-red-600 text-center text-2xl py-4  ' >Regular Items</h1>
          <div className='inline-flex gap-4 flex-wrap m-4 justify-around'>
              {medicines.map((item,index)=>(
                <div key={index} className=' items-center  overflow-hidden w-30 hover:shadow-2xl rounded-xl cursor-pointer hover:border'>

                    <img src={item.image} className=' rounded-t'/>
                    <h3 className='text-wrap  text-center '>{item.name}</h3>
                </div>
              ))}
          </div>

        </section>

        {/*Measurements gadgets*/}
        <section className='bg-green-100 my-4'>
          <h1 className='text-red-600 text-center text-2xl py-4  ' >Measurements gadgets</h1>
          <div className='inline-flex gap-4 flex-wrap m-4 justify-around'>
              {medicines.map((item,index)=>(
                <div key={index} className=' items-center  overflow-hidden w-30 hover:shadow-2xl rounded-xl cursor-pointer hover:border'>

                    <img src={item.image} className=' rounded-t'/>
                    <h3 className='text-wrap  text-center '>{item.name}</h3>
                </div>
              ))}
          </div>

        </section>


    </div>
  )
}
