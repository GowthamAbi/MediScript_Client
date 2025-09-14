import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import BlogPage from './pages/BlogPage.jsx'
import AdminRegister from './components/Register/AdminRegister.jsx'
import CustomerRegister from './components/Register/CustomerRegister.jsx'
import VendorRegister from './components/Register/VendorRegister.jsx'
import AdminLogin from './components/Login/AdminLogin.jsx'
import CustomerLogin from './components/Login/CustomerLogin.jsx'
import VendorLogin from './components/Login/VendorLogin.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<App />}/>
    <Route path="/:id" element={<BlogPage/>}/>

    {/* Register List */}
    <Route path="/register/admin" element={<AdminRegister/>}/>
    <Route path="/register/vendor" element={<CustomerRegister/>}/>
    <Route path="/register/client" element={<VendorRegister/>}/>

    {/* Login List */}
    <Route path="/login/admin" element={<AdminLogin/>}/>
    <Route path="/login/vendor" element={<CustomerLogin/>}/>
    <Route path="/login/client" element={<VendorLogin/>}/>

    </Routes>
</BrowserRouter>




)
