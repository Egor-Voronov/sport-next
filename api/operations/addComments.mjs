import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.mjs";
import {comments} from "../data/comments.mjs";

try {
    const docRef = await addDoc(collection(db, "comments"), {comments});
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}
