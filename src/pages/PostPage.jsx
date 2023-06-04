import "./PostPage.css";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import placeholder from "../assets/placeholder.jpg";
import { useLocation } from "react-router-dom";
function PostPage() {
  const [post, setPost] = useState({});
  const [isLogged, setIsLogged] = useState(false);
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
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className="cage">
        <div className="margin">
          <div className="flexblock">
            <div className="headers">
              <div className="title">{post.title}</div>
              <div className="date">{post.date}</div>
            </div>
            <div>
              <img className="imger" src={postImg}></img>
            </div>
          </div>
          <div className="content">{post.text}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostPage;
