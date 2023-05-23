import "./Offers.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PhotoSlider from "../components/photoSlider";
import placeholder from "../assets/placeholder.jpg";
function Offers() {
  const [images, setImages] = useState([
    { src: "1.png", text: "Zdj1" },
    { src: "2.png", text: "Zdj2" },
    { src: "3.png", text: "Zdj3" },
    { src: "4.png", text: "Zdj4" },
    { src: "5.png", text: "Zdj5" },
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