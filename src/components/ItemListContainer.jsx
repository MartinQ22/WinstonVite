import { useEffect, useRef, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { getItems } from "../firebase/db";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
         getItems().then(res => setItems(res))
         

    //   fetch(`https://dummyjson.com/products/category/${categoryName}`)
    //     .then((res) => res.json())
    //     .then((data) => setItems(data.products))
    //     .catch((error) =>
    //       console.error("Error al cargar el fetch de categorias:", error)
    //     );
    // } else {
    //   fetch("https://dummyjson.com/products")
    //     .then((res) => res.json())
    //     .then((res) => setItems(res.products))
    //     .catch((error) =>
    //       console.error("Error al cargar el fetch de categorias:", error)
    //     );
    }
  }, [categoryName]);

  return <ItemList items={items} />;
}

export default ItemListContainer;
