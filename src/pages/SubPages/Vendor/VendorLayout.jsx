import React from 'react'
import VendorSideBar from './VendorSideBar'
import { Outlet } from 'react-router-dom'

export default function VendorLayout() {
  return (
    <div><VendorSideBar/>
    {Outlet}
    </div>
  )
}
