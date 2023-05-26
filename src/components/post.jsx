function Post(props) {
  const { title, date, text, src } = props.data;
  const path = "/src/assets/postImages/";
  const source = `${path}${src}`;
  return (
    <div className="post">
      <div className="header">
        <a className="title">{title}</a>
        <a className="date">{date}</a>
      </div>
      <img className="post-image" src={source}></img>
      <p className="text">{text}</p>
    </div>
  );
}

export default Post;
