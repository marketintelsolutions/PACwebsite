import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const postCollectionRef = collection(db, "stayUpdated");

export const getPosts = async (setPostLists, setLoading) => {
  const data = await getDocs(postCollectionRef);
  const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  setPostLists(posts);
  setLoading(false);
  localStorage.setItem("posts", JSON.stringify(posts));
};
