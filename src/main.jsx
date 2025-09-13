import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import BlogPage from './pages/BlogPage.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<App />}/>
    <Route path="/blog" element={<BlogPage />}/>
    </Routes>
</BrowserRouter>




)
