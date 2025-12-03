import React, { use } from 'react';

const HomeDecor = ({ decorPromise }) => {
  const decorData = use(decorPromise);
  // console.log(decorData) ; 
  return (
    <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 justify-center items-center w-11/12 mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-14 xl:mb-16 2xl:mb-20'>

      <h1 className='font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 2xl:text-[40px] text-center'>Eco Decor Ideas 🌿</h1>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 2xl:gap-12">
        {decorData.map((idea) => (
          <div
            key={idea.id}
            className="bg-base-100 shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300"
          >
            <img
              src={idea.image}
              alt={idea.title}
              className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />
            <div className="p-4 sm:p-5 text-center flex flex-col gap-2">
              <h3 className="font-semibold text-lg md:text-xl text-primary">
                {idea.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {idea.desc}
              </p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default HomeDecor;