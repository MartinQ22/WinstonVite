function Logo () {

    return (
        <button className='cartWidget' onClick={handleClick}>
            <img src="https://res.cloudinary.com/dfwb8a17z/image/upload/v1748839992/cart-8-svgrepo-com_i2laqa.png" alt="icono carrito" />
            <p className='cartContador'>{cantidadItems}</p>
        </button>
    )
}