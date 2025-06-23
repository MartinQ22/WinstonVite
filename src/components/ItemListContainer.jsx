import { useEffect, useRef, useState } from "react";
import Counter from './Counter';
import ItemList from './ItemList';
import Item from './Item';





// const response = await fetch('https://dummyjson.com/products');
//       const data = await response.json()
//       console.log(data);


// const productos = [
//     {
//       id: 1, 
//       title: "PUMA HOOPS x TORTUGAS NINJA MB.04 L&M",
//       image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//       category: "Zapatillas de Moda para Hombre",
//       price: 259999,
//       button: "Agregar al Carrito",
//     },
//     {
//       id: 2, 
//       title: "PUMA x TORTUGAS NINJA Suede XL 2",
//       image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//       category: "Zapatillas de Moda para Mujer",
//       price: 209999,
//       button: "Agregar al Carrito",
//     },
//     {
//       id: 3, 
//       title: "PUMA x TORTUGAS NINJA Suede XL",
//       image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//       category: "Zapatillas de Moda para Hombre",
//       price: 209999,
//       button: "Agregar al Carrito",
//     },
//     {
//       id: 4, 
//       title: "PUMA HOOPS X TORTUGAS NINJA MB.03 LO KRANG",
//       image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//       category: "Zapatillas de Moda para Hombre",
//       price: 259999,
//       button: "Agregar al Carrito",
//     },
//     /////////////////////////////////////////////
//     {
//       id: 5, 
//       title: "Nike Dunk Low Retro",
//       image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//       category: "Zapatillas de Moda para Hombre",
//       price: 199999,
//       button: "Agregar al Carrito",
//     },
//     {
//       id: 6, 
//       title: "Nike Air Force 1 '07",
//       image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//       category: "Zapatillas de Moda para Hombre",
//       price: 199999,
//       button: "Agregar al Carrito",
//     },
//     {
//       id: 7, 
//       title: "Air Jordan 1 Low",
//       image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//       category: "Zapatillas de Moda para Hombre",
//       price: 199999,
//       button: "Agregar al Carrito",
//     },
//     {
//         id: 8, 
//         title: "Air Jordan 4 Retro",
//         image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//         category: "Zapatillas de Moda para Hombre",
//         price: 399999,
//         button: "Agregar al Carrito",
//       },
//     {
//         id: 9, 
//         title: "Nike Air Max Pulse",
//         image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//         category: "Zapatillas de Moda para Hombre",
//         price: 299999,
//         button: "Agregar al Carrito",
//       },
//     {
//       id: 10, 
//       title: "NIKE SB ZOOM NYJAH 3 PREMIUM",
//       image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//       category: "Zapatillas de Moda para Hombre",
//       price: 219999,
//       button: "Agregar al Carrito",
//     },
// ]

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