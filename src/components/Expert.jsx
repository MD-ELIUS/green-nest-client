import React, { use } from 'react';

// ✅ Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// ✅ Swiper styles
import 'swiper/css';

const Expert = ({ expertPromise }) => {

  const expertData = use(expertPromise)

  return (
    <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7  w-11/12 mx-auto pt-4 sm:pt-8 md:pt-10 lg:pt-12'>
       <h1 className="font-bold text-primary text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[40px] mb-4 md:mb-6 text-center">
       Meet Our Green Experts
      </h1>
     
      {/* ✅ SWIPER MARQUEE START */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 16 },
          640: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 32 },
          1280: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className='w-full'
      >

        {expertData.map(expert => (
          <SwiperSlide key={expert.id}>
            <div className='flex flex-col items-center justify-center mt-3'>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 rounded-full ring-2 ring-offset-2">
                  <img src={expert.image} alt={expert.name} />
                </div>
              </div>

              <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[24px] font-semibold text-center mt-2'>
                {expert.name}
              </h3>

              <h4 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-[20px] text-accent'>
                {expert.specialization}
              </h4>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      {/* ✅ SWIPER MARQUEE END */}

    </div>
  );
};

export default Expert;
