import "./News.css";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import Post from "../components/post";
import arrowleft from "../assets/arrow-left-solid.svg";
import arrowright from "../assets/arrow-right-solid.svg";

function News() {
  const [posts, setPosts] = useState([{}]);
  const [page, setPage] = useState(1);
  const [click, setClick] = useState(1);
  const [isLogged, setIsLogged] = useState(false);
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
      <div className="cage content">
        <div className="news-grid-wrapper">{elements}</div>

        <div className="page-change-container">
          <button
            className="page-change"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <img className="arrow-image" src={arrowleft}></img>
          </button>
          <a href="#" className="page-number">
            {page}
          </a>
          <button
            className="page-change"
            onClick={() => setPage(page + 1)}
            disabled={posts.length < 3}
          >
            <img className="arrow-image" src={arrowright}></img>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default News;
