import "./Panel.css";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import Question from "../components/question";
function Panel() {
  const [questions, setQuestions] = useState([{}]);
  const [click, setClick] = useState(1);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    async function fetchQuestions() {
      const response = await axios.get(`http://localhost:5000/api/questions`);
      setQuestions(response.data.data);
    }
    fetchQuestions();
  }, [click]);
  const elements = questions.map((elem, index) => {
    return (
      <Question
        key={index}
        data={elem}
        setClick={setClick}
        isLogged={isLogged}
      />
    );
  });
  return (
    <div className="site-wrapper">
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className="cage">
        {isLogged && <div className="news-grid-wrapper">{elements}</div>}
      </div>
      <Footer />
    </div>
  );
}

export default Panel;
