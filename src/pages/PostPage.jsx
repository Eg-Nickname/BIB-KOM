import "./PostPage.css";
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import placeholder from "../assets/placeholder.jpg";
import { useLocation } from "react-router-dom";
function PostPage() {
  const [post, setPost] = useState({});
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/posts/${postId}`,
        post,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setPost((prevPost) => {
      return {
        ...prevPost,
        [name]: value,
      };
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPost((prevPost) => ({
      ...prevPost,
      image: file,
    }));
  };
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
  }, [isEditing]);
  console.log(post);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const postImg = `/src/assets/postImages/${post.image}`;
  return (
    <div className="site-wrapper">
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className="cage">
        <div className="margin content">
          {isEditing && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}
              />
              <textarea name="text" value={post.text} onChange={handleChange} />
              <input
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <button>Prześlij</button>
            </form>
          )}
          {!isEditing && (
            <div>
              {" "}
              <div className="flexblock">
                <div className="headers">
                  <div className="title">{post.title}</div>
                  <div className="date">{post.date}</div>
                </div>
                <div>
                  <img className="imger" src={postImg}></img>
                </div>
              </div>
              <div className="post-text">{post.text}</div>
            </div>
          )}
          {isLogged && (
            <button onClick={() => setIsEditing(!isEditing)}>EDYTUJ</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostPage;
