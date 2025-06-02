
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