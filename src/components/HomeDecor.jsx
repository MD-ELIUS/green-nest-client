import React, { use } from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const HomeDecor = ({ decorPromise }) => {
  const decorData = use(decorPromise);

  // animation variants
  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 
    justify-center items-center  w-11/12 mx-auto pt-4 sm:pt-8 md:pt-10 lg:pt-12 mb-4 md:mb-6 lg:mb-8'>

         <h1 className="font-bold text-primary text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[40px] mb-4 md:mb-6 text-center">
        Eco Decor Ideas 
      </h1>

     

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full pb-12"
      >
        {decorData.map((idea) => (
          <SwiperSlide key={idea.id}>
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-base-100 shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300"
            >
              <img
                src={idea.image}
                alt={idea.title}
                className="w-full h-40 sm:h-56 md:h-60 object-cover"
              />

              <div className="p-4 sm:p-5 text-center flex flex-col gap-2">
                <h3 className="font-semibold text-lg md:text-xl text-primary">
                  {idea.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {idea.desc}
                </p>

                <Link className='btn btn-primary btn-outline'>
                  Read More
                </Link>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom center dots fix */}
      <style>{`
        .swiper-pagination {
          position: relative;
          margin-top: 20px;
          text-align: center;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #16a34a;
          opacity: 0.4;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>

    </div>
  );
};

export default HomeDecor;
