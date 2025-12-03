import React, { use } from 'react';

const Expert = ({ expertPromise }) => {

  const expertData = use(expertPromise)
  // console.log(expertData)

  return (
    <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 justify-center items-center w-11/12 mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-14 xl:mb-16 2xl:mb-20'>
      <h1 className='font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[40px] text-center'>Meet Our Green Experts</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 justify-between items-center flex-wrap'>
        {expertData.map(expert => (
          <div className='flex flex-col items-center justify-center' key={expert.id}>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 rounded-full ring-2 ring-offset-2">
                <img src={expert.image} alt={expert.name} />
              </div>
            </div>
            <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[24px] font-semibold text-center mt-2'>{expert.name}</h3>
            <h4 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-[20px] text-accent'>{expert.specialization}</h4>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Expert;