
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/home/navbar'
import Home from './components/home/home'
import Products from './components/home/products/products'
import About from './components/home/about'
import Contact from './components/home/contact'
import SearchBar from './components/searchBar'
import Cart from './components/home/cart'
import { Navigate } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import Login from './login'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
};
function App() {
  return (
      
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={< Navigate to="/homepage" replace />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/aboutpage" element={<About />} />
            <Route path="/contactpage" element={<Contact />} />
            <Route path="/cartpage" element={<Cart />} />
            <Route path="/productpage" element={<Products />} />
            <Route path='/loginpage'  element={<Login/>}/>
          </Route>
        </Routes>
        
      </CartProvider>
  )
}
export default App
