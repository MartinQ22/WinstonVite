import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItem } from "../firebase/db";
import ItemDetail from "./ItemDetail";
import { Loader } from "./Loader";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem(id)
      .then((res) => setItem(res))
      .finally(() => setLoading(false));
  }, [id]);

  return loading ? <Loader /> : <ItemDetail item={item} />;
}

export default ItemDetailContainer;
