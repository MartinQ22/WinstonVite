import { useState, useEffect, useRef } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  
  return(
    <>
    
    <BrowserRouter>
    <NavBar />
    <Routes>
      {/* Ruta para el home */}
      <Route path="/" element={<ItemListContainer />}/>
      {/* Ruta para las categorias */}
      <Route path="/category/:categoryName" element={<ItemListContainer />}/>
      {/* Ruta para single items */}
      <Route path="/item/:id" element={<ItemDetailContainer />}/>
      {/* Ruta de error 404*/}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
      
    </BrowserRouter>
    </>
  )
  
}

export default App

// const data = { name: 'soy una promesa'}

// const promesa = new Promise((resolve, reject)=> {resolve(data)}) 

// const resultadoPromesa = await promesa

// console.log(resultadoPromesa);

