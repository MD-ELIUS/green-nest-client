// Banner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1683134285765-87d4d565efa1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbSUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Welcome to GreenNest",
    subtitle: "Bring Nature to Your Home",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: 2,
    image:
      "https://media.architecturaldigest.com/photos/5dcde00380598800086215f6/16:9/w_2560%2Cc_limit/Osofsky_Oct19-5.jpg",
    title: "Fresh Indoor Plants",
    subtitle: "Beautify Your Living Space",
    buttonText: "Explore",
    buttonLink: "/shop",
  },
  {
    id: 3,
    image:
      "https://cdn.mos.cms.futurecdn.net/v2/t:95,l:0,cw:1920,ch:1080,q:80,w:1920/koqquZZfQgzvGLjFkZQ8wJ.jpeg",
    title: "GreenNest Home Shop",
    subtitle: "Healthy Plants for a Healthy Life",
    buttonText: "Get Started",
    buttonLink: "/shop",
  },
];

const Banner = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="bannerSwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[430px] xl:h-[450px] ">
              
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {banner.title}
                </h1>

                <p className="text-base sm:text-lg md:text-2xl mb-6 drop-shadow-md">
                  {banner.subtitle}
                </p>

                <a
                  href={banner.buttonLink}
                  className="btn btn-primary btn-soft font-semibold"
                >
                  {banner.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
