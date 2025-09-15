import React from 'react'
import NavBar from '../../../components/HomePageSection/NavBar'
import { Outlet } from 'react-router-dom'
import AdminLayout from './AdminLayout'

export default function AdminDashBorad() {
  return (
    <div>
      <NavBar/>
      <AdminLayout/>
      </div>
  )
}
