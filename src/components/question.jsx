import { Link } from "react-router-dom";
import axios from "axios";
function Question(props) {
  const { Question_id, Email, Name, Topic, text } = props.data;
  console.log(props.data);
  const setClick = props.setClick;
  const isLogged = props.isLogged;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await deletePost(Question_id);
    setClick((prevClick) => prevClick + 1);
  };
  async function deletePost(id) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/questions/${id}`
      );
    } catch (err) {
      console.log(err.response.data.msg);
    }
  }
  return (
    <div className="post">
      <form onSubmit={handleSubmit}>
        <div className="flexblock">
          <div className="header">
            <div className="title">{Email}</div>
            <div className="date">{Name}</div>
            <div className="topic">{Topic}</div>
            <div className="text">{text}</div>
          </div>
        </div>
        <div className="padding-button">
          <button className="send-input">Usuń</button>
        </div>
      </form>
    </div>
  );
}

export default Question;
