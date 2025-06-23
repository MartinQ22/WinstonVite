import React from 'react';
import './Card'

function ItemList({items}) {
    return(
    <div className='itemListContainer'>
            {items.map(item => (
                
                <div className="card">
                    <div><img src={item.image} alt={item.title} /></div>
        <p key={item.id} className="heading">{item.title}</p>
        <p>{item.category}</p>
        <p><span>$</span>{item.price}</p>
        </div>) )}
    </div>)
    
}

export default ItemList

