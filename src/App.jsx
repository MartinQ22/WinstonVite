import { useState } from 'react'
import './App.css'
import CartWidget from './components/CartWidget'

function App() {
  
  return(
    <>
    {/* Navegacion */}
    <nav className='NavBar'>
      {/* Logo */}
      <div className='winstonLogo'>
        <img className='logoImg' src="https://res.cloudinary.com/dfwb8a17z/image/upload/v1748842997/WinstonLogo_adtxyy.jpg" alt="logo mono" />
        <h3>Winston</h3>
      </div>
      {/* Links Nav */}
      <ul className='navLinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Mis Pedidos</a></li>     
      </ul>
      {/* CartWidth */}
      <CartWidget />
    </nav>
    {/* Main */}
    <main>
      <div className='itemListContainer'>
        
      </div>
    </main>

    </>
  )
  
}

export default App
