import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom' 
import HomePage from './landing_page/Home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import Login from './landing_page/login/Login.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import Support from './landing_page/support/Support.jsx'
import NotFound from './landing_page/NotFound.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>  
    </>
  )
}

export default App
