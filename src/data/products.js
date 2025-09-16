import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";

export async function fetchProducts() {
  const db = getFirestore();
  const productsCollection = collection(db, "products");
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function fetchProductById(id) {
  const db = getFirestore();
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
}
