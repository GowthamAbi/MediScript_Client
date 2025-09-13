import React from 'react'
export default function Category() {

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
  },
  {
    name: "Cough & Cold Medicines",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966492.png"
  },
  {
    name: "Vitamins & Minerals",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966497.png"
  }


 
]


  return (
    <div className='mt-2 m-4 h-auto p-4 '>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {medicineCategory.map((item,index)=>(
              <div className='flex flex-col items-center bg-white rounded-lg  cursor-pointer shadow-md hover:shadow-lg  transition' key={index}>
                <img src={item.image} alt="img" className='w-12 h-12 mb-2'/>
                <h4 className='text-center'>{item.name}</h4>
            </div>))}
        </div>
    </div>
  )
}
