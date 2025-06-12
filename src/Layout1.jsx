import React from 'react'
import { BrowserRouter , Route, Routes  } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
import About from './pages/About'
import Person1 from './pages/Person1'
const Layout1 = () => {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}>
          <Route path=':id' element={<Person1/>}/>
       </Route>
        <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Layout1