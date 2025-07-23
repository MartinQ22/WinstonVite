import Logo from "./Logo";
import CartWidget from "./CartWidget";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => setDropdownOpen((open) => !open);
  const closeDropdown = () => setDropdownOpen(false);

  // const [categories, setCategories] = useState([]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/categories")
  //     .then((response) => response.json())
  //     .then((data) => setCategories(data))
  // }, []);

  // const handleCategoryChange = (event) => {
  //   const selectedCategory = event.target.value;
  //   if (selectedCategory) {
  //     navigate(`/category/${selectedCategory}`);
  //   }
  // };

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
              <Link to="/category/beuty" onClick={closeDropdown}>
                Beuty
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

//  <div className="categoryDropdown">
//           <select className="categoryDropdown"
//               name="categories"
//               id="categories"
//               onChange={handleCategoryChange}
//               defaultValue="">
//             <option value="">Seleccionar categoría</option>
//               {categories.map((category, index) => (
//               <option className="optionFont" key={index} value={category.slug}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
