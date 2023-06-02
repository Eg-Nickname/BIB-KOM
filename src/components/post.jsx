import { Link } from "react-router-dom";

function Post(props) {
  const { Post_id, title, date, text, image } = props.data;
  const path = "/src/assets/postImages/";
  const source = `${path}${image}`;
  return (
    <div className="post">
      <div className="flexblock">
      <div className="header">
        <div className="title">{title}</div>
        <div className="date">{date}</div>
      </div>
      <img className="post-image" src={source}></img>
      </div>
      <div className="padding-button">
      <Link className="send-input" to={`/aktualności/${Post_id}`}>Czytaj</Link>
      </div>
    </div>
  );
}

export default Post;
