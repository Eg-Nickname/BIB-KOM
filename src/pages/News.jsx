import "./News.css";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import Post from "../components/post";
function News() {
  const [posts, setPosts] = useState([{}]);
  const [page, setPage] = useState(1);
  const [click, setClick] = useState(1);
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState({
    title: "",
    text: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setClick((prevClick) => prevClick + 1);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(
        `http://localhost:5000/api/posts/page?page=${page}`
      );
      setPosts(response.data.data);
    }
    fetchPosts();
  }, [click, page]);
  const elements = posts.map((elem, index) => {
    return (
      <Post key={index} data={elem} setClick={setClick} isLogged={isLogged} />
    );
  });
  return (
    <div className="site-wrapper">
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className="cage">
        <div className="news-grid-wrapper content">{elements}</div>
        {isLogged && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
            <textarea name="text" value={data.text} onChange={handleChange} />
            <button>Prześlij</button>
          </form>
        )}
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          -
        </button>
        {page}
        <button onClick={() => setPage(page + 1)} disabled={posts.length < 3}>
          +
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default News;
