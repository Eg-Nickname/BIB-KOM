function Post(props) {
  const { title, date, text } = props.data;
  return (
    <div className="post">
      <h1>{title}</h1>
      <h1>{date}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Post;
