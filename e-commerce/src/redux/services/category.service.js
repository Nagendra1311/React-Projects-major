import { collection, query, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getCategoryFromFirebase = async () => {
    const q = query(collection(db, "categories"));

    let categories = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());

        let category = doc.data();
        category.id = doc.id;

        categories.push(category)
    });
    return (categories);
}

export const addCategoryToFirebase = async (category) => {
    const docRef = await addDoc(collection(db, "categories"), category);
    console.log("Document written with ID: ", docRef.id);

}

export const deleteCategoryToFirebase = async (category) => {
    await deleteDoc(doc(db, "categories", category.id));


}


export const updateCategoryToFirebase = async (category) => {
    const categoryRef = doc(db, "categories", category.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(categoryRef, category);

}