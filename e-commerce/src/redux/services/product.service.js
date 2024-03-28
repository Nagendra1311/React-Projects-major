import { collection, query, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getProductFromFirebase = async () => {
    const q = query(collection(db, "products"));

    let products = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());

        let product = doc.data();
        product.id = doc.id;

        products.push(product)
    });
    return (products);
}

export const addProductToFirebase = async (product) => {
    const docRef = await addDoc(collection(db, "products"), product);
    console.log("Document written with ID: ", docRef.id);

}

export const deleteProductToFirebase = async (product) => {
    await deleteDoc(doc(db, "products", product.id));


}


export const updateProductToFirebase = async (product) => {
    const productRef = doc(db, "products", product.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(productRef, product);

}