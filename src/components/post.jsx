import { Link } from "react-router-dom";
import axios from "axios";
function Post(props) {
  const { Post_id, title, date, image } = props.data;
  const setClick = props.setClick;
  const isLogged = props.isLogged;
  const path = "/src/assets/postImages/";
  const source = `${path}${image}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await deletePost(Post_id);
    setClick((prevClick) => prevClick + 1);
  };
  async function deletePost(id) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/posts/${id}`
      );
    } catch (err) {
      console.log(err.response.data.msg);
    }
  }
  return (
    <div className="post">
      <form onSubmit={handleSubmit}>
        <div className="flexblock flex-responsive">
          <div className="header">
            <div className="title">{title}</div>
            <div className="date">{date.substring(0, 10)}</div>
          </div>
          <img className="post-image" src={source}></img>
        </div>
        <div className="post-button">
          <Link className="send-input" to={`/aktualności/${Post_id}`}>
            Czytaj
          </Link>
        </div>
        {isLogged && (
          <div className="post-button">
            <button className="send-input">Usuń</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Post;
