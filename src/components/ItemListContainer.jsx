import { useEffect, useRef, useState } from "react";
import ItemList from './ItemList';






// const response = await fetch('https://dummyjson.com/products');
//       const data = await response.json()
//       console.log(data);

function ItemListContainer () {

    const [items, setItems] = useState([])

    // const getItems = () => new Promise ((resolve, reject)=> {
    //     if (productos.length > 0) {
    //          setTimeout(() => {
    //         resolve(productos)
    //     }, 3000)
    //     } else {
    //         reject('No hay mas productos')
    //     }
       
    // })
    useEffect(() => {
       const productos = fetch('https://dummyjson.com/products')
       .then(res => res.json())
       .then(res => setItems(res.products))
      
      //  getItems()
      //  .then(data => setItems(data))
      //  .catch(err => console.log(err))
    }, [])

    return (
        <ItemList items={items}/>
    )
}

export default ItemListContainer;