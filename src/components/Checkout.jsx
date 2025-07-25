import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { useCart } from "../context/useCart";
import { createOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleExpiryInput = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 3) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    e.target.value = value;
  };

  const handleNumericInput = (e, maxLength) => {
    const value = e.target.value.replace(/\D/g, "");
    e.target.value = value.slice(0, maxLength);
  };

  const handleCardNumberInput = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 19);
    const formatted = raw.match(/.{1,4}/g)?.join(" ") || "";
    e.target.value = formatted;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const notify = (orderId) => {
    toast.success(
      `Tu orden ${orderId} fue emitida!, te llegara un mail con los detalles. Gracias por comprar con nosotros`,
      {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      }
    );
  };

  const handleSumit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const clientName = form.clientName.value;
    const phoneNumber = form.phoneNumber.value;
    const cardNumber = form.cardNumber.value;

    const order = {
      user: { clientName, email, phoneNumber, cardNumber },
      items: cart,
      time: serverTimestamp(),
    };

    try {
      const docRef = await createOrder(order);
      notify(docRef.id);
      clearCart();
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      toast.error("Error al generar orden de compra, intentalo nuevamente", {
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

  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <form className="checkout-form" onSubmit={handleSumit}>
        <input
          className="checkout-input"
          type="text"
          name="clientName"
          placeholder="Nombre y Apellido"
          required
          onChange={handleInputChange}
        />
        <input
          className="checkout-input"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleInputChange}
        />
        <input
          className="checkout-input"
          type="text"
          name="phoneNumber"
          placeholder="Numero de telefono"
          maxLength="17"
          required
          onChange={(e) => {
            handleInputChange(e);
            handleNumericInput(e);
          }}
        />
        <input
          className="checkout-input"
          type="text"
          name="cardNumber"
          placeholder="Numero de tarjeta"
          maxLength="24"
          required
          onChange={(e) => {
            handleInputChange(e);
            handleCardNumberInput(e);
          }}
        />
        <div className="checkout-row">
          <input
            className="checkout-input half-width"
            type="texto"
            name="expiry"
            placeholder="MM/YY"
            maxLength="5"
            required
            onChange={(e) => {
              handleInputChange(e);
              handleExpiryInput(e);
            }}
          />
          <input
            className="checkout-input half-width"
            type="text"
            name="cvv"
            placeholder="CVV"
            maxLength="3"
            required
            onChange={(e) => {
              handleInputChange(e);
              handleNumericInput(e, 3);
            }}
          />
        </div>

        <p>por favor, complete todas casillas para continuar</p>

        <button
          type="submit"
          className={`checkout-button ${isFormValid ? "enabled" : "disabled"}`}
          disabled={!isFormValid}
        >
          Confirmar Pago
        </button>
      </form>
    </div>
  );
}

export default Checkout;
