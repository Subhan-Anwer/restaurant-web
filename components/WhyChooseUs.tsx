import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <section className="relative w-full py-[60px] bg-[rgba(13,13,13,0.95)] flex items-center justify-center">
      <div className="w-full max-w-[1320px] min-h-[716px] h-auto flex xl:flex-nowrap flex-wrap justify-center flex-col md:flex-row container mx-auto px-5 lg:gap-24 items-center">
        {/* Image box */}
        <div className="flex flex-col gap-5 md:w-1/2">
          <div className="flex gap-3 items-end flex-wrap md:flex-nowrap">
            <Image
              width={900}
              height={900}
              quality={100}
              className="w-full md:w-[362px] h-[352px] object-cover rounded-[6px]"
              alt="hero"
              src="/why-image-1.jpeg"
            />
            <Image
              width={900}
              height={900}
              quality={100}
              className="w-full md:w-[281px] h-[231px] object-cover rounded-[6px]"
              alt="hero"
              src="/why-image-2.jpeg"
            />
          </div>

          <div className="flex gap-3 items-start flex-wrap md:flex-nowrap">
            <div className="flex gap-3 w-full md:w-auto">
              <Image
                width={900}
                height={900}
                quality={100}
                className="w-full md:w-[244px] h-[306px] object-cover rounded-[6px]"
                alt="hero"
                src="/why-image-3.jpeg"
              />
              <Image
                width={900}
                height={900}
                quality={100}
                className="w-full md:w-[221px] h-[226px] object-cover rounded-[6px]"
                alt="hero"
                src="/why-image-4.jpeg"
              />
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
              <Image
                width={900}
                height={900}
                quality={100}
                className="w-full md:w-[161px] h-[168px] object-cover rounded-[6px]"
                alt="hero"
                src="/why-image-5.jpeg"
              />
              <Image
                width={900}
                height={900}
                quality={100}
                className="w-full md:w-[161px] h-[166px] object-cover rounded-[6px]"
                alt="hero"
                src="/why-image-6.jpeg"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-[570px] md:w-1/2 lg:pr-5 md:pr-16 flex md:items-start md:text-left items-center text-center">
          <div className="flex-col">
            <h3
              style={{ fontFamily: "GreatVibes" }}
              className="text-3xl text-[var(--primary-yellow)] mb-5"
            >
              Why Choose us
            </h3>
            <h1 className="sm:text-6xl text-3xl mb-4 font-bold text-white">
              <span className="text-[var(--primary-yellow)]">Ex</span>ta ordinary
              taste
              <br className="hidden lg:inline-block" />
              And Experienced
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
              augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
              sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
              consequat.
            </p>

            {/* Icon box */}
            <div className="w-full sm:w-[374px] flex justify-between gap-3 text-white">
              <div className="flex flex-col items-center">
                <div className="w-[102px] h-[100px] bg-[var(--primary-yellow)] rounded-[6px] flex items-center justify-center">
                  <Image
                    width={56}
                    height={56}
                    quality={100}
                    className="w-[56px] h-[56px] object-cover"
                    alt="hero"
                    src="/Hamburger.png"
                  />
                </div>
                <p>Fast Food</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[102px] h-[100px] bg-[var(--primary-yellow)] rounded-[6px] flex items-center justify-center">
                  <Image
                    width={56}
                    height={56}
                    quality={100}
                    className="w-[56px] h-[56px] object-cover"
                    alt="hero"
                    src="/Cookie.png"
                  />
                </div>
                <p>Lunch</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[102px] h-[100px] bg-[var(--primary-yellow)] rounded-[6px] flex items-center justify-center">
                  <Image
                    width={56}
                    height={56}
                    quality={100}
                    className="w-[56px] h-[56px] object-cover"
                    alt="hero"
                    src="/Wine.png"
                  />
                </div>
                <p>Dinner</p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="w-full sm:w-[374px] bg-white rounded-[6px] flex items-center justify-between mt-6">
              <div className="w-[10px] h-[92px] bg-[var(--primary-yellow)] rounded-tl-[6px] rounded-bl-[6px]"></div>
              <h1 className="text-[var(--primary-yellow)] text-[48px] leading-[56px] font-bold">
                30+
              </h1>
              <div className="text-black flex flex-col mr-8">
                <p className="text-[20px] leading-[28px]">Years of</p>
                <p className="text-[24px] leading-[32px] font-bold">Experienced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WhyChooseUs