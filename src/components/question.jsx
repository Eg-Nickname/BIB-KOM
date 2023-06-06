import { Link } from "react-router-dom";
import axios from "axios";
function Question(props) {
  const { Question_id, Email, Name, Topic, text } = props.data;
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
            <div className="question-name">
              <h3>Imie i nazwisko: </h3>
              {Name}
            </div>
            <div className="question-mail">
              <h3>E-mail: </h3>
              {Email}
            </div>
            <div className="question-topic">
              <h3>Temat: </h3>
              {Topic}
            </div>
            <div className="question-text">
              <h3>Wiadomość: </h3>
              {text}
            </div>
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
