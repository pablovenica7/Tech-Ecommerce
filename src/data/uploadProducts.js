import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebaseConfig";
import { PRODUCTS } from "./products-local";

const db = getFirestore(app);

export async function uploadProducts() {
  try {
    const productsCollection = collection(db, "products");

    for (const product of PRODUCTS) {
      const { id, ...data } = product;
      await addDoc(productsCollection, data);
    }

    console.log("Productos cargados en Firestore");
  } catch (error) {
    console.error("Error al subir productos:", error);
  }
}
