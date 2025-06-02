import { useState } from 'react'
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
      <ItemListContainer text="Bienvenido a Winston!" />
    </main>

    </>
  )
  
}

export default App
