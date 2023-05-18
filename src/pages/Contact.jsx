import "./Contact.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function Contact() {
  const [data, setData] = useState({
    user: "",
    mail: "",
    title: "",
    text: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
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
  return (
    <div>
      <Navbar />
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          value={data.user}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mail"
          value={data.mail}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <textarea name="text" value={data.text} onChange={handleChange} />
        <input type="submit" value="Send" />
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
