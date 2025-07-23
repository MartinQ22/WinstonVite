import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItem } from "../firebase/db";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id).then((res) => setItem(res));
  }, [id]);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
