import { collection, addDoc } from "firebase/firestore";
import { db } from "./config.mjs";
import { catalogItems } from "./data/catalogItems.mjs";
import { comments } from "./data/comments.mjs";

async function setData(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), { data });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const arg = process.argv.slice(2);

if (arg.includes("--catalog")) {
  setData("catalogItems", catalogItems);
}
if (arg.includes("--comments")) {
  setData("comments", comments);
}
