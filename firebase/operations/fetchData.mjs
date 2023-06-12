import { collection, getDocs } from "firebase/firestore";
import { db } from "../config.mjs";

export const fetchComments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "comments"));
    const comments = [];
    querySnapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() });
    });
    return comments;
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
};

export const fetchCatalogItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "catalogItems"));
    const comments = [];
    querySnapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() });
    });
    return comments;
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
};

// fetchComments().then((comments) => {
//   console.log(comments[0]);
// }).catch((error) => {
//   console.error("Error fetching comments: ", error);
// });
