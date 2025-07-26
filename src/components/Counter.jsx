import { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import { toast, Bounce } from "react-toastify";

function Counter({ item }) {
  const notifyCart = () => {
    toast.success("Producto agregado al carrito!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [counter, setCounter] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => setCounter(counter + 1);
  const handleLess = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleAddToCart = () => {
    if (counter > 0) {
      addToCart({ ...item, quantity: counter });
    } else {
      toast.error("Error al agregar al carrito, intentalo de nuevo más tarde", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  useEffect(() => {}, [counter]);

  return (
    <div className="item-detail-quantity-selector">
      <button className="quantity-btn" onClick={handleLess}>
        -
      </button>
      <span className="quantity-display">{counter}</span>
      <button className="quantity-btn" onClick={handleAdd}>
        +
      </button>

      <button
        onClick={() => {
          notifyCart();
          handleAddToCart();
        }}
        className="item-detail-add-to-cart-button"
        disabled={counter === 0}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

export default Counter;
