import CartContext from "./CartContext";
import { useState } from "react";


function CartProvider ({children}) {

    const [cart, setCart]= useState ([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (productId) => {
        setCart(cart.map(item => {
            if (item.id === productId) {
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return null; // Remove item completely if quantity becomes 0
                }
            }
            return item;
        }).filter(item => item !== null)); // Remove null items
    }

    const getTotal = () => {
        const total = cart.map( prod  => prod.price * prod.quantity )
        const totalPrice = total.reduce((acc, current)=>acc + current, 0)
       
        return totalPrice
    }

    const getQuantity = () => {
        const quantities = cart.map( prod  => prod.quantity )
        const total = quantities.reduce((acc, current)=>acc + current, 0)

        return total
    } 

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, getQuantity, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;