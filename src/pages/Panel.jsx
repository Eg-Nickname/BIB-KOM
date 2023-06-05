import "./Panel.css";

import { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import Question from "../components/question";
function Panel() {
  const defaultPost = { title: "", text: "" };
  const fileInputRef = useRef(null);
  const [questions, setQuestions] = useState([{}]);
  const [click, setClick] = useState(1);
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState(defaultPost);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      await setData(defaultPost);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
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
  console.log(data);
  return (
    <div className="site-wrapper">
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className="cage">
        {isLogged && (
          <div className="questions-grid-wrapper content">
            <div className="no-grid-spacer"></div>
            <h1 className="section-title">Dodaj post</h1>
            <div className="no-grid-spacer"></div>
            <div className="post">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                />
                <textarea
                  name="text"
                  value={data.text}
                  onChange={handleChange}
                />
                <input
                  type="file"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
                <button>Prześlij</button>
              </form>
            </div>
            <div className="no-grid-spacer"></div>
            <h1 className="section-title">Pytania</h1>
            <div className="no-grid-spacer"></div>

            {elements}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Panel;
