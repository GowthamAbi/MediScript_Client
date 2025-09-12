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
    <div className='bg-white m-4 h-auto max-w-2xl'>
        <div>
            {medicineCategory.map((item,index)=>(<div>
                <Cards key={index} value={item} index={index+1}/>
            </div>))}
        </div>
    </div>
  )
}
