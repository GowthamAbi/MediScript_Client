import React from 'react'

export default function Footer() {

const menuSections = [
  {
    title: "COMPANY",
    items: [
      "About Netmeds",
      "Career",
      "Terms and Conditions",
      "Shipping and Delivery Policy",
      "Return, Refund and Cancellation Policy",
      "Sitemap"
    ]
  },
  {
    title: "SHOPPING",
    items: [
      "Shop by Categories",
      "Offers / Coupons",
      "FAQs",
      "Need Help?",
      "Contact Us"
    ]
  },
  {
    title: "POPULAR CATEGORIES",
    items: [
      "Fitness",
      "Personal Care",
      "Ayush",
      "Skin Care",
      "Men's Grooming",
      "Make-up",
      "Devices"
    ]
  }
];


  return (
    <div>
          <footer className='flex  justify-around bg-gray-100 py-4 cursor-pointer  '>
            {menuSections.map((menu,index)=>(

              <div key={index} className=' '>
                <h1 className='text-xl font-bold mb-4 hover:underline'>{menu.title}</h1>
                <ul>
                  {menu.items.map((item,i)=>(
                    <li key={i} className='text-sm leading-8 hover:underline text-wrap '>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </footer>
    </div>
  )
}
