import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { getItems, getItemsByCategory } from "../firebase/db";
import { Loader } from "./Loader";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true); // Start loading when category changes or on mount
    if (categoryName) {
      getItemsByCategory(categoryName)
        .then((res) => setItems(res))
        .finally(() => setLoading(false));
    } else {
      getItems()
        .then((res) => setItems(res))
        .finally(() => setLoading(false));
    }
  }, [categoryName]);

  return loading ? <Loader /> : <ItemList items={items} />;
}

export default ItemListContainer;
