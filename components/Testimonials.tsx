import React from 'react'
import Image from 'next/image'

const Testimonials = ({ color }: { color: string }) => {
    return (
        <section className="w-full h-auto flex items-center mx-auto justify-center mb-10 px-4">
            <div className="w-full max-w-[1273px] h-auto gap-8 sm:gap-16 flex flex-col">
                {/* Title */}
                <div className="flex flex-col justify-center items-start text-center sm:text-left">
                    <h3
                        style={{ fontFamily: "GreatVibes" }}
                        className="text-xl sm:text-2xl lg:text-3xl text-[var(--primary-yellow)] mb-3 sm:mb-5"
                    >
                        Testimonials
                    </h3>
                    <h1 className={`text-xl sm:text-3xl lg:text-4xl font-bold ${color}`}>
                        What our clients are saying
                    </h1>
                </div>

                {/* Rectangle */}
                <div className="w-full max-w-[868px] h-auto self-center relative mt-6 sm:mt-10">
                    {/* Profile Image */}
                    <div className="w-[80px] sm:w-[100px] lg:w-[133px] h-[80px] sm:h-[100px] lg:h-[133px] absolute z-10 top-[-40px] sm:top-[-50px] left-[50%] transform -translate-x-1/2">
                        <Image
                            className="w-full h-full object-cover object-center rounded-full"
                            src="/client-img.jpeg"
                            alt="Client img"
                            width={200}
                            height={200}
                        />
                    </div>

                    {/* White Box with Overlay */}
                    <div className="w-full h-auto flex items-end justify-center bg-white p-6 sm:p-8 relative rounded-lg shadow-md">
                        {/* Overlay Image */}
                        <div className="absolute top-0 rotate-[-13deg] -right-12 sm:-right-20 w-[300px] sm:w-[595px] h-[400px] sm:h-[680px]">
                            <Image
                                className="w-full h-full opacity-[8%] object-cover"
                                src="/testimonial.png"
                                alt="Overlay"
                                width={800}
                                height={800}
                                quality={100}
                            />
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <Image
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mt-[70px] object-cover object-center"
                                src="/Quotes.png"
                                alt="Quotes"
                                width={200}
                                height={200}
                            />
                            <p className="text-center text-sm sm:text-base lg:text-lg text-[#4F4F4F] max-w-[500px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                                volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                            </p>
                            <div className="flex flex-col items-center gap-3">
                                {/* Stars */}
                                <div className="flex items-center justify-center">
                                    <span className="text-lg sm:text-xl lg:text-2xl text-[var(--primary-yellow)]">&#9733;</span>
                                    <span className="text-lg sm:text-xl lg:text-2xl text-[var(--primary-yellow)]">&#9733;</span>
                                    <span className="text-lg sm:text-xl lg:text-2xl text-[var(--primary-yellow)]">&#9733;</span>
                                    <span className="text-lg sm:text-xl lg:text-2xl text-[var(--primary-yellow)]">&#9733;</span>
                                    <span className="text-lg sm:text-xl lg:text-2xl text-[#E0E0E0]">&#9733;</span>
                                </div>
                                <h6 className="text-base sm:text-lg lg:text-xl font-bold">Alamin Hasan</h6>
                                <p className="text-sm sm:text-base lg:text-lg text-[#828282]">Food Specialist</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="w-4 h-4 bg-[var(--primary-yellow)] rounded-full"></div>
                    <div className="w-4 h-4 bg-[var(--primary-yellow)] rounded-full opacity-30"></div>
                    <div className="w-4 h-4 bg-[var(--primary-yellow)] rounded-full opacity-30"></div>
                    <div className="w-4 h-4 bg-[var(--primary-yellow)] rounded-full opacity-30"></div>
                </div>
            </div>
        </section>
    );
};


export default Testimonials