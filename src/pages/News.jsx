import "./News.css";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import Post from "../components/post";
function News() {
  const [posts, setPosts] = useState([{}]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(`http://localhost:5000/api/posts`);
      setPosts(response.data.data);
    }
    fetchPosts();
  }, []);
  const elements = posts.map((elem, index) => {
    return <Post key={index} data={elem} />;
  });
  console.log(posts);
  return (
    <div className="site-wrapper">
      <Navbar />
      <div className="cage">
        <div className="news-grid-wrapper">{elements}</div>
      </div>
      <Footer />
    </div>
  );
}

export default News;
