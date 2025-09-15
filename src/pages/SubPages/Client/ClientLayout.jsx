import React from 'react'
import ClientSideBar from './ClientSideBar'
import { Outlet } from 'react-router-dom'

export default function ClientLayout() {
  return (
    <div>
        <ClientSideBar/>
        {Outlet}
    </div>
  )
}
