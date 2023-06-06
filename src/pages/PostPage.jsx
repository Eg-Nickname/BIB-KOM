import "./PostPage.css";
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import placeholder from "../assets/placeholder.jpg";
import { useLocation, Link } from "react-router-dom";
function PostPage() {
  const [post, setPost] = useState({ date: "" });
  const fileInputRef = useRef(null);
  const startingErrors = {
    title: false,
    text: false,
  };
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState(startingErrors);
  const [isLogged, setIsLogged] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    Object.keys(post).forEach((k) => {
      if (k !== "image") {
        post[k] = String(post[k]).trim();
      }
    });
    setErrors(() => ({
      title: post.title.length === 0,
      text: post.text.length === 0,
    }));
    if (post.title.length !== 0 && post.text.length !== 0) {
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
        setIsEditing(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } catch (err) {
        console.log(err.response.data.msg);
      }
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
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const postImg = `/src/assets/postImages/${post.image}`;
  return (
    <div className="site-wrapper">
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className="cage">
        <div className="margin content">
          <Link
            className="send-input post-edit-button center-button"
            to={"/aktualności"}
          >
            Przejdź do aktualności
          </Link>
          {isEditing && (
            <form onSubmit={handleSubmit}>
              <input
                className={
                  errors.title
                    ? "text-input post-edit-button error-input"
                    : "text-input post-edit-button"
                }
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}
              />
              <textarea
                className={
                  errors.text
                    ? "text-input post-edit-button error-input"
                    : "text-input post-edit-button"
                }
                name="text"
                value={post.text}
                onChange={handleChange}
              />
              <input
                className="text-input file-input post-edit-button"
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <button className="send-input post-edit-button">Prześlij</button>
            </form>
          )}
          {!isEditing && (
            <div>
              {" "}
              <div className="flexblock flex-responsive">
                <div className="headers">
                  <div className="title">{post.title}</div>
                  <div className="date">{post.date.substring(0, 10)}</div>
                </div>
                <div>
                  <img className="imger" src={postImg}></img>
                </div>
              </div>
              <div className="post-text">{post.text}</div>
            </div>
          )}
          {isLogged && (
            <button
              className="send-input post-edit-button"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Przestań edytować" : "Edytuj"}
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostPage;
