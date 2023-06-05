import "./Offers.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PhotoSlider from "../components/photoSlider";
function Offers() {
  const [isLogged, setIsLogged] = useState(false);
  const [images, setImages] = useState([
    { src: "1.png", text: "Procesory" },
    { src: "2.png", text: "Płyty główne i karty graficzne" },
    { src: "3.png", text: "Klawiatury" },
    { src: "4.png", text: "Serwis" },
  ]);
  return (
    <div>
      <div className="site-wrapper">
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />

        <div className="cage content">
            <h1 className="offers-title">Produkty</h1>
            <PhotoSlider images={images} />
        </div>

      <Footer />
      </div>
    </div>
  );
}

export default Offers;
