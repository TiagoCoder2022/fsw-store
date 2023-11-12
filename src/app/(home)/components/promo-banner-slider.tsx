"use client";
import React, { useState, useEffect, useRef } from "react";
import { slides } from "../../../constants/cardData";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Circle,
  SlidersIcon,
} from "lucide-react";
import Link from "next/link";

let count = 0;
let slideInterval: NodeJS.Timeout;

const PromoBannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const slideRef: React.RefObject<HTMLDivElement> = useRef(null);

  //Removes the animation from the DOM
  const removeAnimation = () => {
    slideRef.current?.classList.remove("fade-anim");
  };

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleNextSlideClick();
    }, 3000);
  };

  useEffect(() => {
    startSlider();
    slideRef.current?.addEventListener("animationend", removeAnimation);
    slideRef.current?.addEventListener("mouseenter", pauseSlider);
    slideRef.current?.addEventListener("mouseleave", startSlider);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handlePrevSlideClick = () => {
    const productsLength = slides.length;
    count = (currentIndex + productsLength - 1) % productsLength;

    setCurrentIndex(count);
    slideRef.current?.classList.add("fade-anim");
  };

  const handleNextSlideClick = () => {
    count = (count + 1) % slides.length;
    setCurrentIndex(count);

    setCurrentIndex(count);
    slideRef.current?.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="group relative mx-auto max-w-[1920px]">
      <Link href="/deals">
        <img
          src={`${slides[currentIndex].url}`}
          alt="Até 55% de desconto esse mês!"
          className="aspect-w-16 aspect-h-9 h-auto w-full"
        />
      </Link>

      <div className="translate-y-1/5 absolute left-5 top-[40%] hidden -translate-x-0 cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ChevronLeftIcon onClick={handlePrevSlideClick} size={30} />
      </div>

      <div className=" translate-y-1/5 absolute right-5 top-[40%]  hidden -translate-x-0 cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ChevronRightIcon onClick={handleNextSlideClick} size={30} />
      </div>

      <div className="top-4 flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="mr-2 cursor-pointer text-2xl"
            onClick={() => goToSlide(slideIndex)}
          >
            <Circle
              size={10}
              fill={`${slideIndex === currentIndex ? "white" : "none"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBannerSlider;
