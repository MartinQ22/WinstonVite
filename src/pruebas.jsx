import { useEffect, useState } from "react";

// Funciones y expresiones
function App() {
  const item = {
    nombre: 'Mouses Gamer',
    precio: '$20000 UDS',
    categoria: 'Mouse',
  }
  {}
  function formatearItem(producto) {
    return producto.nombre +' '+ producto.precio +' '+ producto.categoria;
  }

  return(
    <>
    <h1>Estos son los productos!</h1>
    <p>{formatearItem(item)}</p>
    </>
  )
  
}

// Clase 2 

 const cantidadItems = "2";

  

  const [idioma, setIdioma] = useState('Español');



  const handleClick = () =>{
    setIdioma('Ingles')
  }


  return(
    <>
    {/* Navegacion */}
    <nav>
      <button onClick={handleClick}>
        <p>{idioma} {cantidadItems}</p>
      </button>
      <ul>
        <li style={{color: 'green'}}>Perifericos</li>
        <li>Componentes</li>
        <li>Nosotros</li>
      </ul>
      <a href="#">Home</a>
    </nav>
    {/* Main */}
    <main>
      <div>
        
      </div>
    </main>

    </>
  )

  function App(){
    const [user, setUser] = useState('Mary');

    const handleClick = () =>{
      setUser('John')
    }

    return(
      <>
      <h1>Hola {user}</h1>
      <button onClick={handleClick}>Cambiar usuario</button>
      </>
    )
  }

  useEffect(() =>{
    console.log('El componente se montó')


      // funcion de limpieza para ahorrar memoria de useeffect
      return () =>{
      clearTimeout(timer);
    }   
  }, [])

  useEffect(() =>{
    console.log('El componente se actualizó')
  }, [user])
  
  

  
