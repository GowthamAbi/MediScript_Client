import React from 'react'
import Cards from './Cards'

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
    <div className='bg-white mt-2 m-4 h-auto p-4 shadow-2xl'>
        <div className=''>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {medicineCategory.map((item, i) => (
    <div 
      key={i} 
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
    >
      <img className="w-12 h-12 mb-2" src={item.image} alt={item.name} />
      <h1 className="text-center text-sm font-medium">{item.name}</h1>
    </div>
  ))}
</div>

        </div>
    </div>
  )
}
