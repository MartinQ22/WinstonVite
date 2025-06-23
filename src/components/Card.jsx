import React from 'react';
// Asegúrate de importar tu archivo CSS si estás usando módulos CSS o CSS global
// import './CardStyles.css'; // Si usas un archivo CSS separado

function ProductCard({ item }) { // Asumo que 'item' es un objeto de tu array de productos
  return (
    // La prop 'key' siempre debe ir en el elemento más externo cuando mapeas listas.
    // Asegúrate de que 'item.id' sea único.
    <div className="card" key={item.id}>
      <div className="card__shine"></div>
      <div className="card__glow"></div>
      <div className="card__content">
        
        {/* Contenedor para la imagen del producto y su overlay */}
        <div className="card__image-container">
          <img src={item.image} alt={item.title} className="card__product-image" />
          <div className="card__image-overlay"></div> {/* Para el patrón/brillo sobre la imagen */}
        </div>

        <div className="card__text">
          <p className="card__title">{item.title}</p>
          <p className="card__description">{item.category}</p> {/* Usamos la categoría como descripción */}
        </div>

        <div className="card__footer">
          <div className="card__price"><span>$</span>{item.price}</div>
          <div className="card__button">
            <svg height="16" width="16" viewBox="0 0 24 24">
              <path
                strokeWidth="2" // En JSX es strokeWidth, no stroke-width
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

export default ProductCard;