import React from 'react'
import { BrowserRouter , Route, Routes  } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
import About from './pages/About'
const Layout = () => {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact/:id' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Layout
