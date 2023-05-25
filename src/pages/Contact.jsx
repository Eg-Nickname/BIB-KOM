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
      <div className="cage">
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
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d646.3350133682515!2d19.965541988558268!3d49.610193473145976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47160b7206f7611b%3A0x469af8b558144a52!2sBiBkom%20sklep%20serwis!5e0!3m2!1spl!2spl!4v1684484970756!5m2!1spl!2spl&z=14"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
              <textarea
                className="text-input"
                name="text"
                value={data.text}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input type="submit" value="Wyślij" className="send-input" />
            </div>
          </form>
        </div>
      </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Contact;
