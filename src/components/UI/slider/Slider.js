import React, { useState, useEffect } from "react";
import { storage } from "../../../firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";

import "./Slider.css";
import BtnSlider from "./BtnSlider";

const Slider = ({ c }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, `casesImg/${c.id}`);

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const nextSlide = () => {
    if (slideIndex !== imageList.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imageList.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imageList.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchEnd = e.targetTouches[0].clientX;
    if (touchStart - touchEnd > 150) {
      nextSlide();
    }
    if (touchStart - touchEnd < -150) {
      prevSlide();
    }
  };

  return (
    <div
      className="container-slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {imageList.map((url, index) => {
        return (
          <div
            key={url}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={url} alt="clinical case" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: imageList.length }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
