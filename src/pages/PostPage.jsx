import "./PostPage.css";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";
function PostPage() {
  const [post, setPost] = useState({});
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/posts/${postId}`
        );
        setPost(response.data.data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPost();
  }, []);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const postImg = `/src/assets/postImages/${post.image}`;
  console.log(post);
  return (
    <div className="site-wrapper">
      <Navbar />
      <div className="cage">
        <h1>Title : {post.title}</h1>
        <h1>date: {post.date}</h1>
        <p>{post.text}</p>
        <img src={postImg}></img>
      </div>
      <Footer />
    </div>
  );
}

export default PostPage;
