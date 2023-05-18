import "./Contact.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


import telephone from "../assets/telephone-black.png";
import phone from "../assets/phone-black.png";
import location from "../assets/location-black.png";
import contact from "../assets/contact-black.png";

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
    <div className="site-wrapper">
      <Navbar />
      <div className="grid-wrapper content">
        <div className="contact-info">
          <ul>
            <li className="flexblock">
              <img className="footer__location" src={location} />
              Kościuszki 1D Rabka - Zdrój 34-700
            </li>
            <li className="flexblock">
              <img src={phone} className="footer__phone" />
              736061062
            </li>
            <li className="flexblock">
              <img src={telephone} className="footer__telephone" />
              736061061
            </li>
            <li className="flexblock">
              <img className="footer__telephone" src={contact} />
              kontakt@bibkom.pl
            </li>
          </ul>
        </div>
        <div className="google-maps">
          {/* TU MA BYĆ MAPA ALE NIE MA :( */}
        </div>
        <div className="form">
        <h2>Formularz kontaktowy</h2>
        <form onSubmit={handleSubmit}>
        <div className="input-box">
          <h3>Imie i nazwisko</h3>
          <input
            className="text-input"
            type="text"
            name="user"
            value={data.user}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
        <h3>E-mail</h3>
          <input
            className="text-input"
            type="text"
            name="mail"
            value={data.mail}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
        <h3>Temat</h3>
          <input
            className="text-input"
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <h3>Treść</h3>
          <textarea className="text-input" name="text" value={data.text} onChange={handleChange} />
        </div>
        <div className="input-box">  
          <input type="submit" value="Send" />
        </div>
        </form>
        </div>
      </div>   
      <Footer />
    </div>
  );
}

export default Contact;
