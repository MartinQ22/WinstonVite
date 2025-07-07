import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

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
    < ItemDetail item={item}/>
    )
}
    
    export default ItemDetailContainer;
    