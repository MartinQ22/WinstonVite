import { useContext } from 'react';
import  CartContext  from "../context/CartContext";
import { useNavigate } from 'react-router';
function CartWidget () {

    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity ()
    const navigate = useNavigate()

    return (

        <button className='cartWidget' onClick={()=>navigate('/cart')}>
            <img src="https://res.cloudinary.com/dfwb8a17z/image/upload/v1748839992/cart-8-svgrepo-com_i2laqa.png" alt="icono carrito" />
            <p className='cartContador'>{quantity}</p>
        </button>
    )
}

export default CartWidget;