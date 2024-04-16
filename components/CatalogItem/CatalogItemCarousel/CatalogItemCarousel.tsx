"use client";

import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import Image from "next/image";
import { useState } from "react";

const CatalogItemCarousel = ({ images }: { images: { src: string }[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <CarouselProvider
        naturalSlideHeight={234}
        naturalSlideWidth={255}
        totalSlides={images.length}
        className="xl:hidden"
      >
        <Slider>
          {images.map((image, index) => {
            return (
              <Slide key={index} index={index}>
                <Image
                  className="z-0 relative h-[234px] w-[255px] mx-auto md:w-[648px] md:h-[656px]"
                  src={image.src}
                  alt="кондиционер"
                  width={648}
                  height={656}
                />
              </Slide>
            );
          })}
        </Slider>
        <div className="flex items-center justify-center gap-2">
          {images.map((image, index) => {
            const isSelectedSlide = index === currentSlide;
            return (
              <Dot
                key={index}
                slide={index}
                className={`h-2 w-2 bg-[#C9C9C9] rounded-xl transition-all ${
                  isSelectedSlide ? "w-[30px] !bg-[#40A74B]" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            );
          })}
        </div>
      </CarouselProvider>
      <div className="hidden xl:flex items-start justify-start gap-5">
        <ul>
          {images.map((image, index) => {
            let isSelected = false;
            if (index === currentSlide) isSelected = true;
            return (
              <li
                key={index}
                className="relative"
                onClick={() => {
                  setCurrentSlide(index);
                }}
              >
                <Image
                  className={`w-[80px] h-[80px] cursor-pointer ${
                    isSelected ? "border-[#40A74B] border" : ""
                  }`}
                  src={image.src}
                  alt="кондиционер"
                  width={648}
                  height={656}
                />
              </li>
            );
          })}
        </ul>
        <Image
          src={images[currentSlide].src}
          alt="кондиционер"
          width={648}
          height={656}
        />
      </div>
    </>
  );
};

export default CatalogItemCarousel;
