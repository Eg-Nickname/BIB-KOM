import "./Offers.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PhotoSlider from "../components/photoSlider";
import placeholder from "../assets/placeholder.jpg";
function Offers() {
  const [images, setImages] = useState([
    { src: "1.png", alt: "Zdj1" },
    { src: "2.png", alt: "Zdj2" },
    { src: "3.png", alt: "Zdj3" },
    { src: "4.png", alt: "Zdj4" },
    { src: "5.png", alt: "Zdj5" },
  ]);
  return (
    <div>
      <Navbar />
      <div>
        <PhotoSlider images={images} />
        <img src={placeholder}></img>
      </div>
      <Footer />
    </div>
  );
}

export default Offers;
