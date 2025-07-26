import { toast } from "react-toastify";
import { useCart } from "../context/useCart";
import { Link } from "react-router";
import { useNavigate } from "react-router";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="errorNoItems">
        <h1>No hay items en el carrito</h1>
        <Link to="/">Ir a la tienda</Link>
      </div>
    );
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const notifyDeleteAll = () => {
    toast.info("Productos borrados del carrito", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="cart-container">
      <h1>Resumen de Carrito</h1>
      {cart.map((prod) => (
        <div key={prod.id}>
          <div className="cart-single-item">
            <img className="img-small" src={prod.thumbnail} alt={prod.tittle} />
            <h1>
              {prod.title} x {prod.quantity}
            </h1>
            <p>${prod.price}</p>
            <button
              className="delete-btn"
              onClick={() => removeFromCart(prod.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
      <button
        className="clean-btn"
        onClick={() => {
          clearCart();
          notifyDeleteAll();
        }}
      >
        Vaciar Carrito
      </button>
      <h2 className="total-btn">Total ${getTotal()}</h2>
      <button
        className="item-detail-add-to-cart-button"
        onClick={() => navigate("/checkout")}
      >
        Ir al Check out
      </button>
    </div>
  );
}

export default Cart;
