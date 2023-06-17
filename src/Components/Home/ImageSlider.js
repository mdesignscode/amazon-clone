import React, { useEffect, useState } from 'react';
import './imageSlider.scss';
import NextLight from '../../assets/next-light.png';
import NextDark from '../../assets/next-dark.png';
import PreviousLight from '../../assets/previous-light.png';
import PreviousDark from '../../assets/previous-dark.png';

function ImageSlider ({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    document.querySelector('.image__sliderImage').classList.add('fadeIn');

    setTimeout(() => {
      document.querySelector('.image__sliderImage').classList.remove('fadeIn');
    }, 1000);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    document.querySelector('.image__sliderImage').classList.add('fadeOut');

    setTimeout(() => {
      document.querySelector('.image__sliderImage').classList.remove('fadeOut');
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 20000);
  });

  return (
    <div className="image__slider">
      <button
        className="image__sliderControlButton previous"
        aria-label="Previous slide"
        onPointerDown={previousSlide}
      >
        <img
          className="image__sliderControl previous overlay"
          src={PreviousDark}
          alt="Previous slide"
        />
        <img
          className="image__sliderControl previous"
          src={PreviousLight}
          alt=""
        />
      </button>

      <button
        className="image__sliderControlButton next"
        aria-label="Next slide"
        onPointerDown={nextSlide}
      >
        <img
          className="image__sliderControl next overlay"
          src={NextDark}
          alt=""
        />
        <img
          className="image__sliderControl next"
          src={NextLight}
          alt="Next slide"
        />
      </button>

      {
        <img
          className="image__sliderImage"
          src={images[currentIndex].image}
          alt="Home banner"
        />
      }
    </div>
  );
}

export default ImageSlider;
