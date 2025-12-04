import React from "react";
import wateringImg from ".././assets/watering.jpg";
import sunlightImg from ".././assets/sunlight.webp";
import fertilizerImg from ".././assets/fertilizer.jpg";
import { FaTint, FaSun, FaLeaf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const tips = [
  {
    id: 1,
    title: "Watering",
    icon: <FaTint />,
    image: wateringImg,
    desc: "Proper watering is essential for healthy plant growth and strong root development.",
    points: ["Water when top soil feels dry", "Use room temperature water", "Avoid wet leaves"],
  },
  {
    id: 2,
    title: "Sunlight",
    icon: <FaSun />,
    image: sunlightImg,
    desc: "Plants need the right amount of sunlight to perform photosynthesis efficiently.",
    points: ["Bright indirect sunlight", "Rotate weekly for equal light", "Avoid harsh afternoon sun"],
  },
  {
    id: 3,
    title: "Fertilizer",
    icon: <FaLeaf />,
    image: fertilizerImg,
    desc: "Fertilizers provide essential nutrients to maintain healthy and balanced growth.",
    points: ["Fertilize every 2–4 weeks", "Use diluted liquid fertilizer", "Pause in winter season"],
  },
  {
    id: 4,
    title: "Plant Care",
    icon: <FaLeaf />,
    image: fertilizerImg,
    desc: "Regular plant care keeps your indoor garden vibrant and beautiful.",
    points: ["Clean plant leaves", "Check for pests", "Repot when needed"],
  },
];

const PlantCare = () => {
  return (
    <div className="w-11/12 mx-auto pt-4 sm:pt-8 md:pt-10 lg:pt-12">
      <h1 className="font-bold text-primary text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[40px] mb-6 md:mb-10 text-center">
        Plant Care Guide
      </h1>

      {/* Small and Medium screens - Swiper */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },     // small screens
            768: { slidesPerView: 2 },   // medium screens
          }}
        >
          {tips.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white h-[420px] flex flex-col">
                {/* IMAGE */}
                <div className="h-[180px] w-full overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                {/* CONTENT */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div className="flex items-center gap-3 mb-2 text-primary text-lg font-semibold">
                    {item.icon}
                    <h3>{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    {item.points.map((point, i) => (
                      <p key={i}>✔ {point}</p>
                    ))}
                  </div>
                  <button className="mt-4 btn btn-outline btn-primary w-full">Learn More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Large screens - Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-8">
        {tips.map((item) => (
          <div key={item.id} className="relative rounded-3xl overflow-hidden shadow-lg bg-white h-[420px] flex flex-col hover:scale-105 transition-all duration-300">
            {/* IMAGE */}
            <div className="h-[180px] w-full overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            </div>
            {/* CONTENT */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div className="flex items-center gap-3 mb-2 text-primary text-lg font-semibold">
                {item.icon}
                <h3>{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
              <div className="text-sm text-gray-700 space-y-1">
                {item.points.map((point, i) => (
                  <p key={i}>✔ {point}</p>
                ))}
              </div>
              <button className="mt-4 btn btn-outline btn-primary w-full">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCare;
