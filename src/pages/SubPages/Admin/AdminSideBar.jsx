import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminSideBar() {
  return (
    <div >
      <NavLink  to='/admin' className="flex ">
      <h1>Dashboard</h1>
      </NavLink>
      <NavLink  to='/admin/addproduct' >
      <h1>Add Product</h1>
      </NavLink>
      <NavLink  to='/admin/productlist'>
      <h1>ItemList</h1>
      </NavLink>
      </div>
  )
}
