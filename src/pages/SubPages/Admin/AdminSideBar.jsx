import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminSideBar() {
  return (
    <div>
      <NavLink to="/admin/dashboard">
      <h1>Dashboard</h1>
      </NavLink>
      </div>
  )
}
