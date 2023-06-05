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
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className="pageWidth">
        <div className="cage">
          <PhotoSlider images={images} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Offers;
