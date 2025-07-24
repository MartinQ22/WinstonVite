import Logo from "./Logo";
import CartWidget from "./CartWidget";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => setDropdownOpen((open) => !open);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav className="NavBar">
      <Logo />
      <ul className="navLinks">
        <Link to={"/"}>Home</Link>
        <div className="dropdown" onMouseLeave={closeDropdown}>
          <button className="dropdown-toggle" onClick={handleDropdown}>
            Categorías
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/category/Gabinetes" onClick={closeDropdown}>
                Gabinetes
              </Link>
              <Link to="/category/Videojuegos" onClick={closeDropdown}>
                Videojuegos
              </Link>
              <Link to="/category/Perifericos" onClick={closeDropdown}>
                Perifericos
              </Link>
              <Link to="/category/Componentes PC" onClick={closeDropdown}>
                Componentes PC
              </Link>
              <Link to="/category/Beauty" onClick={closeDropdown}>
                Beauty
              </Link>
            </div>
          )}
        </div>
        <Link to={"/Ofertas/"}>Ofertas</Link>
        <Link to={"/Productos/"}>Productos</Link>
        <Link to={"/Contacto/"}>Contacto</Link>
        <Link to={"/Mis-Pedidos/"}>Mis pedidos</Link>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
