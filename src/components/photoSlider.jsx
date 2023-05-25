import { useState, useEffect } from "react";

function PhotoSlider(props) {
  const { images } = props;
  const Interval = 4000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);
  const dots = images.map((n, index) => (
    <li key={index}>
      <button
        className={currentIndex === index ? "dot active_dot" : "dot"}
        onClick={() => {
          setPrevIndex(currentIndex)
          setCurrentIndex(index)
        }}
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
  const setPhoto = (n) => {
    if (currentIndex + n < images.length) {
      setPrevIndex(currentIndex)
      setCurrentIndex((prevIndex) => prevIndex + n);
    } else {
      setPrevIndex(currentIndex)
      setCurrentIndex(0);
    }
  };
  return (
    <div className="Photoslider">
      <div className="PhotosWrapper">
        <div className="prevPhoto">
            <img className="Photosliderimages"
              src={`src/assets/${images[prevIndex].src}`}
              alt={images[prevIndex].text}
            />
            <div className="Photoslidertext">{images[prevIndex].text}</div>
          </div>

          <div className="currentPhoto">
            <img className="Photosliderimages"
              src={`src/assets/${images[currentIndex].src}`}
              alt={images[currentIndex].text}
            />
        </div>
        <div className="Photoslidertext">{images[currentIndex].text}</div>
      </div>
      <ul className="slider_back">{dots}</ul>
    </div>
  );
}

export default PhotoSlider;
