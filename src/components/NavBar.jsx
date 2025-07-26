import Logo from "./Logo";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
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
              <NavLink
                to="/category/Gabinetes"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeDropdown}
              >
                Gabinetes
              </NavLink>
              <NavLink
                to="/category/Videojuegos"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeDropdown}
              >
                Videojuegos
              </NavLink>
              <NavLink
                to="/category/Perifericos"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeDropdown}
              >
                Perifericos
              </NavLink>
              <NavLink
                to="/category/Componentes PC"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeDropdown}
              >
                Componentes PC
              </NavLink>
              <NavLink to="/category/Beauty" onClick={closeDropdown}>
                Beauty
              </NavLink>
            </div>
          )}
        </div>
        <Link to={"/Contacto/"}>Contacto</Link>
        <Link to={"/cart"}>Mis pedidos</Link>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
