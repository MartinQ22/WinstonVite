import React from 'react';
import { useNavigate } from 'react-router';

function Item ({ item }) { 
  const navigate = useNavigate();
  
  return (
    <div className="card" key={item.id} onClick={() => navigate(`/item/${item.id}`)}>
      <div className="card__shine"></div>
      <div className="card__glow"></div>
      <div className="card__content">
        
        {/* Contenedor para la imagen del producto y su overlay */}
        <div className="card__image-container">
          <img src={item.thumbnail} alt={item.title} className="card__product-image" />
          <div className="card__image-overlay"></div> {/* Para el patrón/brillo sobre la imagen */}
        </div>

        <div className="card__text">
          <p className="card__title">{item.title}</p>
          <p className="card__description">{item.category}</p> 
        </div>

        <div className="card__footer">
          <div className="card__price"><span>$</span>{item.price}</div>
          <div className="card__button">
            <svg height="16" width="16" viewBox="0 0 24 24">
              <path
                strokeWidth="2" 
                stroke="currentColor"
                d="M4 12H20M12 4V20"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;