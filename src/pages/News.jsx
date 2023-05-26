import "./News.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Post from "../components/post";
import posts from "./list.js";
function News() {
  const elements = posts.map((elem, index) => {
    return <Post key={index} data={elem} />;
  });
  return (
    <div className="site-wrapper">
      <Navbar />
      <div className="cage">
        <div className="news-grid-wrapper">
          {elements}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default News;
