function Post(props) {
  const { title, date, text, src } = props.data;
  const path = "/src/assets/postImages/";
  const source = `${path}${src}`;
  return (
    <div className="post">
      <h1>{title}</h1>
      <h1>{date}</h1>
      <p>{text}</p>
      <img src={source}></img>
    </div>
  );
}

export default Post;
