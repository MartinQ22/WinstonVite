import Counter from "./Counter";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function ItemDetail({ item }) {
  const contexto = useContext(CartContext);
  return (
    <div className="item-detail-page-wrapper">
      <div className="item-detail-container">
        <div className="item-detail-image-section">
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="item-detail-product-image"
          />
          <div className="item-detail-image-overlay"></div>
        </div>
        <div className="item-detail-info-section">
          <h1 className="item-detail-title">{item?.title}</h1>
          <p className="item-detail-category">{item?.category}</p>
          <p className="item-detail-description">{item?.description}</p>
          <div className="item-detail-price-section">
            <span className="item-detail-price">
              <span>$</span>
              {item?.price}
            </span>
            <Counter item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
