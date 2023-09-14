import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { arrangeAndAddTimeAgo } from "../../resources/arrangeNews";

const postCollectionRef = collection(db, "stayUpdated");



export const getPosts = async (setPostLists, setLoading) => {
  const data = await getDocs(postCollectionRef);
  const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  let sortedPosts = arrangeAndAddTimeAgo(posts, 'all')
  setPostLists(sortedPosts);
  setLoading(false);
  localStorage.setItem("posts", JSON.stringify(posts));
};


export const getBlogDetails = async (id, setBlog, setLoading) => {
  const docRef = doc(db, "stayUpdated", `${id}`);
  const blogDetail = await getDoc(docRef);
  setBlog(blogDetail.data());
  setLoading(false);
};
