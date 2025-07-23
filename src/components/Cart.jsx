import { useContext } from "react"
import { useCart } from "../context/useCart"
import { Link } from "react-router"
import { useNavigate } from "react-router"

function  Cart() {
    const{cart, removeFromCart} = useCart()
    const navigate = useNavigate()

    if (cart.length === 0) {
        return (
            <div className="errorNoItems">
                <h1>No hay items en el carrito</h1>
                <Link to="/">Ir a la tienda</Link>
            </div>
        )
    }

    const getTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

   return <div className="cart-container">
    <h1>Resumen de Carrito</h1>
        {cart.map(prod => (
            <div key={prod.id}>
                
                <div className="cart-single-item">
                    <img className="img-small" src={prod.thumbnail} alt={prod.tittle}/>
                    <h1>{prod.title} x {prod.quantity}</h1>
                    <p>${prod.price}</p>
                    <button className="delete-btn" onClick={() => removeFromCart(prod.id)}>X</button>
                </div>
                
            </div>
        ))}

        <h2 className="total-btn">Total ${getTotal()}</h2>
        <button className="item-detail-add-to-cart-button" onClick={() => navigate('/checkout')}>Ir al Check out</button>
    </div>
}

export default Cart