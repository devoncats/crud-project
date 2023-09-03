import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutUs } from './pages/About-us'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
