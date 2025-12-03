import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSlider = () => {
  const slides = [
    {
      background:
        "https://i.ibb.co.com/gMkJRGPD/bg-1.png",
      leftPlant: "https://i.ibb.co.com/1fWztmZw/plant.png",
      rightPlant: "https://i.ibb.co.com/GfFC3c6M/detailed-plant-isolated.png",
      slogan: "Rooted in Nature, Flourishing with Care",
    },
    {
      background:
        "https://i.ibb.co.com/hxV5sPFz/bg-2.png",
      leftPlant:
        "https://i.ibb.co.com/zT0YBKHw/vibrant-green-plant-beige-pot-peaceful-home-decor.png",
      rightPlant: "https://i.ibb.co.com/1fWztmZw/plant.png",
      slogan: "Sustainability Begins with You",
    },
    {
      background:
        "https://i.ibb.co.com/B2v1jgK3/bg-3.png",
      leftPlant: "https://i.ibb.co.com/GfFC3c6M/detailed-plant-isolated.png",
      rightPlant:
        "https://i.ibb.co.com/zT0YBKHw/vibrant-green-plant-beige-pot-peaceful-home-decor.png",
      slogan: "Sowing Green Dreams, Reaping Pure Living",
    },
  ];

  return (
    <div className="w-11/12 mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-14 xl:mb-16 2xl:mb-20">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl shadow-lg custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                relative w-full 
                min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px]
                flex items-center justify-center text-white overflow-hidden
              "
              style={{
                backgroundImage: `url(${slide.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >

              <div className="absolute inset-0 bg-black/40"></div>


              <img
                src={slide.leftPlant}
                alt="Left plant"
                className="
                  absolute left-1 sm:left-6 bottom-0
                  w-28 sm:w-38 md:w-50 lg:w-56 xl:w-64
                  object-contain drop-shadow-2xl transition-all duration-300
                "
              />


              <img
                src={slide.rightPlant}
                alt="Right plant"
                className="
                  absolute right-1 sm:right-6 bottom-0
                  w-28 sm:w-38 md:w-50 lg:w-56 xl:w-64
                  object-contain drop-shadow-2xl transition-all duration-300
                "
              />



              <div className="absolute top-26 sm:top-24 md:top-38 lg:top-44 xl:top-50 z-10 text-center px-4 sm:px-6 max-w-[90%] sm:max-w-2xl">
                <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold drop-shadow-md">
                  {slide.slogan}
                </h2>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <style >{`
        @media (max-width: 640px) {
          .custom-swiper .swiper-button-next,
          .custom-swiper .swiper-button-prev {
            width: 25px !important;
            height: 25px !important;
          }
          .custom-swiper .swiper-button-next::after,
          .custom-swiper .swiper-button-prev::after {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
