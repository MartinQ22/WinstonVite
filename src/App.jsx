import { useState, useEffect, useRef } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  
  return(
    <>
    {/* Navegacion */}
    <NavBar />
    {/* Main */}
    <main>
      {/* Lista de productos */}
      <ItemListContainer />
    </main>

    </>
  )
  
}

export default App

const data = { name: 'soy una promesa'}

const promesa = new Promise((resolve, reject)=> {resolve(data)}) 

const resultadoPromesa = await promesa

console.log(resultadoPromesa);

