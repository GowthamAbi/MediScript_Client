import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div>
        <AdminSideBar/>
        {Outlet}
    </div>
  )
}
