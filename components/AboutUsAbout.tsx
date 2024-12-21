import React from 'react'
import Image from 'next/image'

const AboutUsAbout = () => {
  return (
    <section className="w-full my-[90px] flex flex-col lg:flex-row items-center justify-center gap-10 bg-white px-4">
      {/* Images */}
      <div className="w-full max-w-[669px] h-auto flex gap-3">
        <Image
          className="w-[50%] sm:w-[336px] h-[400px] sm:h-[536px] object-cover object-center rounded-md"
          src={"/blog-3.jpeg"} alt="Image"
          width={336} height={536}
        />
        <div className="flex flex-col gap-3 w-[50%]">
          <Image
            className="w-full h-[180px] sm:h-[271px] object-cover object-center rounded-md"
            src={"/why-image-3.jpeg"} alt="Image"
            width={306} height={271}
          />
          <Image
            className="w-full h-[240px] sm:h-[382px] object-cover object-center rounded-md"
            src={"/plate.jpeg"} alt="Image"
            width={309} height={382}
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full max-w-[526px] h-auto flex flex-col items-start justify-between gap-6">
        <div className="flex items-center gap-3">
          <h3 style={{ fontFamily: 'GreatVibes' }} className="text-2xl sm:text-3xl text-[var(--primary-yellow)]">
            About us
          </h3>
          <h3 className="font-bold text-[var(--primary-yellow)]">______</h3>
        </div>
        <h1 className="font-bold text-3xl sm:text-5xl text-[#333333] leading-tight">
          Food is an important part of a balanced Diet
        </h1>
        <p className="text-sm sm:text-base text-[#4F4F4F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>

        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-5">
          <button className="text-white w-full sm:w-[195px] h-[58px] bg-[var(--primary-yellow)] rounded-[6px] text-[18px] font-bold">
            Show more
          </button>
          <div className="flex items-center gap-2">
            <div className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] flex items-center justify-center bg-[var(--primary-yellow)] rounded-full">
              <Image
                className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] object-cover object-center"
                src="/Play.png"
                alt="Play"
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-[#333333] text-sm sm:text-base font-bold">Watch Video</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsAbout