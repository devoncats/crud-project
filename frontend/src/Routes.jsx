import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutUs } from './pages/About-us'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export function PageRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
