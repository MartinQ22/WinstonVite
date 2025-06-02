import Logo from './Logo'
import CartWidget from './CartWidget'

function NavBar () {
    return (
        <nav className='NavBar'>
      {/* Logo */}
      <Logo />
      {/* Links Nav */}
      <ul className='navLinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Mis Pedidos</a></li>     
      </ul>
      {/* CartWidget */}
      <CartWidget />
    </nav>
    )
}

export default NavBar;