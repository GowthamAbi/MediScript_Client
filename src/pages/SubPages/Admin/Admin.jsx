import React from 'react'

import AdminSideBar from './AdminSideBar'
import { Outlet } from 'react-router-dom'
import NavBar from '../../../components/HomePageSection/NavBar'


export default function Admin() {
  return (
    <div>
      <NavBar/>
      <div className="flex h-[calc(100vh-70px)] ">
        <AdminSideBar />
        <Outlet/>
        </div>
      </div>
  )
}
