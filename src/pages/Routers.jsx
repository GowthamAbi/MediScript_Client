import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import BlogPage from './BlogPage.jsx'
import AdminRegister from '../components/Register/AdminRegister.jsx'
import CustomerRegister from '../components/Register/CustomerRegister.jsx'
import VendorRegister from '../components/Register/VendorRegister.jsx'
import AdminLogin from '../components/Login/AdminLogin.jsx'
import CustomerLogin from '../components/Login/CustomerLogin.jsx'
import VendorLogin from '../components/Login/VendorLogin.jsx'
import Layout from '../components/Layout.jsx'

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<BlogPage />} />

      {/* Register List */}
      <Route path="/register/admin" element={<AdminRegister />} />
      <Route path="/register/vendor" element={<VendorRegister />} />
      <Route path="/register/client" element={<CustomerRegister />} />

      {/* Login List */}
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/login/vendor" element={<VendorLogin />} />
      <Route path="/login/client" element={<CustomerLogin />} />

      {/* Side Bar */}
      <Route path="/dashboard" element={<Layout />} />
    </Routes>
  )
}
