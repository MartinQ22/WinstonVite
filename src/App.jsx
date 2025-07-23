import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from "./components/Cart"

function App() {
  
  return(
    <>
    
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/category/:categoryName" element={<ItemListContainer />}/>
      <Route path="/item/:id" element={<ItemDetailContainer />}/>
      {/* Ruta de error 404*/}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      <Route path="/cart" element={<Cart />}/>
    </Routes>
      
    </BrowserRouter>
    </>
  )
  
}

export default App





