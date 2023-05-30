import { Link } from "react-router-dom";

function Post(props) {
  const { Post_id, title, date, text, image } = props.data;
  const path = "/src/assets/postImages/";
  const source = `${path}${image}`;
  return (
    <div className="post">
      <div className="header">
        <a className="title">{title}</a>
        <a className="date">{date}</a>
      </div>
      <img className="post-image" src={source}></img>
      <p className="text">{text}</p>
      <Link to={`/aktualności/${Post_id}`}>Kliknij</Link>
    </div>
  );
}

export default Post;
