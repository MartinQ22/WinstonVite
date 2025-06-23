import { useState, useEffect, useRef } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  
  return(
    <>
    

    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
    </Routes>
      
    </BrowserRouter>
    </>
  )
  
}

export default App

const data = { name: 'soy una promesa'}

const promesa = new Promise((resolve, reject)=> {resolve(data)}) 

const resultadoPromesa = await promesa

console.log(resultadoPromesa);

