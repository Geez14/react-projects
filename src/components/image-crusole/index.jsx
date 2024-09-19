import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const ImageCrusole = ({ url, offset = 0, limit }) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMsg] = useState(null);

  async function apiCall(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?offset=${offset}&limit=${limit}`);
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await response.json();
      setImages(data.photos);
    } catch (e) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") apiCall(url);
  }, [url]);

  if (loading) {
    return <div className="crusole">LOADING...</div>;
  }

  if (errorMessage !== null) {
    return <div className="crusole">MESSAGE CANNOT BE LOADED...</div>;
  }

  function previousImage() {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
  function nextImage() {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div className="crusole">
      <div className="card">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={previousImage}
        />
        {images && images.length
          ? images.map((photo, index) => (
              <img
                className={
                  currentSlide === index
                    ? "current-image"
                    : "inactive-current-image"
                }
                src={photo.url}
                key={photo.id}
                alt={photo.description}
              />
            ))
          : null}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextImage}
        />
        <span className="circle-indicator">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                  key={index}
                  className={
                    "crusole-button-global " +
                    (currentSlide === index
                      ? "crusole-active-button"
                      : "crusole-inactive-button")
                  }
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageCrusole;
