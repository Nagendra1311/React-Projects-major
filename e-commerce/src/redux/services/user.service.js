import { collection, query, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getUserFromFirebase = async () => {
    const q = query(collection(db, "users"));

    let users = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());

        let user = doc.data();
        user.id = doc.id;

        users.push(user)
    });
    return (users);
}

export const addUserToFirebase = async (user) => {
    const docRef = await addDoc(collection(db, "users"), user);
    console.log("Document written with ID: ", docRef.id);

}

export const deleteUserToFirebase = async (user) => {
    await deleteDoc(doc(db, "users", user.id));


}


export const updateUserToFirebase = async (user) => {
    const userRef = doc(db, "users", user.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, user);

}