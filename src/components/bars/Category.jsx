import React from 'react'
import Cards from './Cards'

export default function Category() {

    const medicineCategory=[
  "Analgesics",
  "Antipyretics",
  "Antibiotics",
  "Antiseptics & Disinfectants",
  "Antacids & Antiulcer Drugs",
  "Antihistamines",
  "Cough & Cold Medicines",
  "Vitamins & Minerals",
  "Antidiabetic Drugs",
  "Antihypertensives",
  "Antidepressants",
  "Antifungals",
  "Antivirals"
]


  return (
    <div className='bg-white m-4 h-auto p-4'>
        <div className=''>
            {medicineCategory.map((item,index)=>(
              <div className='inline-flex bg-red-50 border-2 mx-2 my-2 px-2 w-60 justify-center'>
                <Cards  key={index} item={item} index={index+1}/>
            </div>))}
        </div>
    </div>
  )
}
