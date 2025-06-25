import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ItemDetailContainer () {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((res) => setItem(res))
            .catch((error) =>
          console.error("Error al cargar el fetch de categorias:", error)
        );
    }, [id]);

    return (

    <div className="item-detail-page-wrapper">
        <div className="item-detail-container">
            <div className="item-detail-image-section">
                <img src={item?.thumbnail} alt={item?.title} class="item-detail-product-image"/>
                <div className="item-detail-image-overlay"></div>
            </div>
            <div className="item-detail-info-section">
                    <h1 className="item-detail-title">{item?.title}</h1>
                    <p className="item-detail-category">{item?.category}</p>
                    <p className="item-detail-description">{item?.description}</p>
                <div className="item-detail-price-section">
                    <span className="item-detail-price"><span>$</span>{item?.price}</span>
                {/* <div className="item-detail-quantity-selector">
                    <button className="quantity-btn" data-action="decrement">-</button>
                    <span className="quantity-display">1</span>
                    <button className="quantity-btn" data-action="increment">+</button>
                </div> */}
                </div>
                <button className="item-detail-add-to-cart-button">Agregar al Carrito</button>
            </div>
        </div>
    </div>

        // <div className="itemDetailContainer">
        //     <img src={item?.thumbnail} alt={item?.title} />
        //     <h1>{item?.title}</h1>   
        //     <p>{item?.description}</p>
        //     <p>{item?.price}</p>
        //     <p>{item?.discountPercentage}</p>
        //     <p>{item?.rating}</p>
        //     <p>{item?.stock}</p>
        //     <p>{item?.brand}</p>
        //     <p>{item?.category}</p>
        // </div>
    )
}
    
    export default ItemDetailContainer;
    