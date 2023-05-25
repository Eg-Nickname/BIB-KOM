import { useState, useEffect } from "react";

function PhotoSlider(props) {
  const { images } = props;
  const Interval = 4000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const dots = images.map((n, index) => (
    <li key={index}>
      <button
        className={currentIndex === index ? "dot active_dot" : "dot"}
        onClick={() => setCurrentIndex(index)}
      ></button>
    </li>
  ));
  useEffect(() => {
    const interval = setInterval(() => {
      setPhoto(1);
    }, Interval);
    return () => {
      clearInterval(interval);
    };
  });
  // console.log(dots);
  const setPhoto = (n) => {
    if (currentIndex + n < images.length) {
      setCurrentIndex((prevIndex) => prevIndex + n);
    } else {
      setCurrentIndex(0);
    }
  };
  return (
    <div className="Photoslider">
      <img className="Photosliderimages"
        src={`src/assets/${images[currentIndex].src}`}
        alt={images[currentIndex].text}
      />
      <div className="Photoslidertext">{images[currentIndex].text}</div>
      <ul className="slider_back">{dots}</ul>
    </div>
  );
}

export default PhotoSlider;
