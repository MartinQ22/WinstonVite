import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });

  return items;
};

export const getItemsByCategory = async (category) => {
    
  const q = query(collection(db, "items"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const items = [];

  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    items.push({ ...doc.data(), id: doc.id });
  });

  return items;
};
