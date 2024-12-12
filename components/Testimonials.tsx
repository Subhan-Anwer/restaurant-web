import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
    return (
        <section className="w-full h-[780px] flex items-center justify-center mb-10">
            <div className="w-full max-w-[1273px] h-[770px] gap-16 flex flex-col px-4 sm:px-8">
                {/* Title */}
                <div className="flex flex-col justify-center items-start">
                    <h3
                        style={{ fontFamily: "GreatVibes" }}
                        className="text-2xl sm:text-3xl text-[var(--primary-yellow)] mb-5"
                    >
                        Testimonials
                    </h3>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl mb-4 font-bold text-white">
                        What our client are saying
                    </h1>
                </div>

                {/* Rectangle */}
                <div className="w-full max-w-[868px] h-auto self-center relative mt-4">
                    {/* Profile Image */}
                    <div className="w-[100px] sm:w-[133px] h-[100px] sm:h-[133px] absolute z-10 top-[-50px] left-[50%] transform -translate-x-1/2">
                        <Image
                            className="w-full h-full object-cover object-center rounded-full"
                            src="/client-img.jpeg"
                            alt="Client img"
                            width={200}
                            height={200}
                        />
                    </div>

                    {/* White Box with Overlay */}
                    <div className="w-full h-[451px] flex items-end justify-center bg-white p-8">
                        {/* Overlay Image */}
                        <div className="absolute top-0 rotate-[-13deg] -right-20 w-[595px] h-[680px]">
                            <Image
                                className="w-full h-full opacity-[8%] object-cover"
                                src="/testimonial.png"
                                alt="Overlay"
                                width={800}
                                height={800}
                                quality={100}
                            />
                        </div>

                        <div className="flex flex-col h-auto items-center justify-between gap-6">
                            <Image
                                className="w-10 h-10 sm:w-12 sm:h-12 object-cover object-center rounded-full"
                                src="/Quotes.png"
                                alt="Quotes"
                                width={200}
                                height={200}
                            />
                            <p className="w-full max-w-[696px] text-center text-sm sm:text-lg text-[#4F4F4F]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                                volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                            </p>
                            <div className="flex flex-col gap-3 items-center">
                                {/* Stars */}
                                <div className='flex items-center justify-center w-[152px] h-[24px]'>
                                    <span className='text-3xl text-[var(--primary-yellow)]'>&#9733;</span>
                                    <span className='text-3xl text-[var(--primary-yellow)]'>&#9733;</span>
                                    <span className='text-3xl text-[var(--primary-yellow)]'>&#9733;</span>
                                    <span className='text-3xl text-[var(--primary-yellow)]'>&#9733;</span>
                                    <span className='text-3xl text-[#E0E0E0]'>&#9733;</span>
                                </div>
                                <h6 className="text-lg sm:text-2xl font-bold">Alamin Hasan</h6>
                                <p className="text-sm sm:text-base text-[#828282]">Food Specialist</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="w-[86px] h-[16px] self-center flex justify-between ">
                    <div className="w-[16px] h-[16px] bg-[var(--primary-yellow)] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[var(--primary-yellow)] rounded-[50%] opacity-30"></div>
                    <div className="w-[16px] h-[16px] bg-[var(--primary-yellow)] rounded-[50%] opacity-30"></div>
                    <div className="w-[16px] h-[16px] bg-[var(--primary-yellow)] rounded-[50%] opacity-30"></div>
                </div>
            </div>
        </section>

    )
}

export default Testimonials