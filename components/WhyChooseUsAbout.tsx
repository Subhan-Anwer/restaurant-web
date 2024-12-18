import React from 'react'

const WhyChooseUsAbout = () => {
  return (
    <section className="w-full min-h-[865px] my-[90px] flex flex-col items-center justify-evenly text-center px-6 md:px-12">
    {/* Text */}
    <div className="max-w-[700px] mx-auto">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#333333]">
        Why Choose Us
      </h1>
      <p className="w-full md:w-[579px] text-sm md:text-base text-[#4f4f4f] my-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum.
      </p>
    </div>

    {/* Image */}
    <div className="w-full max-w-[1320px] h-[220px] md:h-[300px] lg:h-[386px] bg-[url('/choose-us.jpeg')] bg-center bg-cover rounded-md"></div>

    {/* Cards */}
    <div className="w-full max-w-[1320px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-20 mt-8 mb-5">
      {/* Card 1 */}
      <div className="w-full max-w-[359px] flex flex-col items-center justify-between mx-auto">
        <div className="w-[80px] h-[80px] bg-[url('/Student.png')] bg-contain bg-no-repeat"></div>
        <h4 className="font-bold text-xl md:text-2xl text-[#333333] mt-4">Best Chef</h4>
        <p className="text-sm md:text-base text-[#4F4F4F] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat.
        </p>
      </div>

      {/* Card 2 */}
      <div className="w-full max-w-[359px] flex flex-col items-center justify-between mx-auto">
        <div className="w-[80px] h-[80px] bg-[url('/Coffee.png')] bg-contain bg-no-repeat"></div>
        <h4 className="font-bold text-xl md:text-2xl text-[#333333] mt-4">120 Item Food</h4>
        <p className="text-sm md:text-base text-[#4F4F4F] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat.
        </p>
      </div>

      {/* Card 3 */}
      <div className="w-full max-w-[359px] flex flex-col items-center justify-between mx-auto">
        <div className="w-[80px] h-[80px] bg-[url('/Person.png')] bg-contain bg-no-repeat"></div>
        <h4 className="font-bold text-xl md:text-2xl text-[#333333] mt-4">
          Clean Environment
        </h4>
        <p className="text-sm md:text-base text-[#4F4F4F] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat.
        </p>
      </div>
    </div>
  </section>
  )
}

export default WhyChooseUsAbout