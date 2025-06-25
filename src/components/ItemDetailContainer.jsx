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
        <div>
            <img src={item?.thumbnail} alt={item?.title} />
            <h1>{item?.title}</h1>   
            <p>{item?.description}</p>
            <p>{item?.price}</p>
            <p>{item?.discountPercentage}</p>
            <p>{item?.rating}</p>
            <p>{item?.stock}</p>
            <p>{item?.brand}</p>
            <p>{item?.category}</p>
        </div>
    )
}
    
    export default ItemDetailContainer;
    