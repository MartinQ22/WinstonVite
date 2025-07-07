import Logo from "./Logo";
import CartWidget from "./CartWidget";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) =>
        console.error("Error al cargar el fetch de categorias:", error)
      );
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      navigate(`/category/${selectedCategory}`);
    }
  };

  return (
    <nav className="NavBar">
      {/* Logo */}
      <Logo />
      {/* Links Nav */}
      <ul className="navLinks">
        <Link to={"/"}>Home</Link>
        {/* Link de Categorias */}
        <div className="categoryDropdown">
          <select className="categoryDropdown"
            name="categories"
            id="categories"
            onChange={handleCategoryChange}
            defaultValue="">
            <option value="">Seleccionar categoría</option>
            {categories.map((category, index) => (
              <option className="optionFont" key={index} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <Link to={"/Ofertas/"}>Ofertas</Link>
        <Link to={"/Productos/"}>Productos</Link>
        <Link to={"/Contacto/"}>Contacto</Link>
        <Link to={"/Mis-Pedidos/"}>Mis pedidos</Link>
      </ul>
      {/* CartWidget */}
      <CartWidget />
    </nav>
  );
}

export default NavBar;
