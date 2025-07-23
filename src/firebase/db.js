import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async () => {
  const q = query(collection(db, "items"), where("stock", ">", 0));
  const querySnapshot = await getDocs(q);
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

export const getItem = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return {...docSnap.data(), id: docSnap.id}
} else {
  console.log("ERRRRRRORRRRRRRRRR");
}
}
