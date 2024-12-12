import Image from 'next/image'
import React from 'react'

const CreativeProcess = () => {
    return (
        <section className="max-w-[1918px] w-full my-16 relative justify-self-center">
            <div className="flex flex-col lg:flex-row items-center justify-end w-full h-auto lg:h-[558px] text-right p-4 lg:p-0">
                {/* Text Content */}
                <div className="lg:mr-16 flex flex-col gap-6 items-center lg:items-end">
                    <h3
                        style={{ fontFamily: "GreatVibes" }}
                        className="text-xl sm:text-2xl lg:text-3xl text-[var(--primary-yellow)]"
                    >
                        Restaurant Active Process
                    </h3>
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white text-center lg:text-right">
                        <span className="text-[var(--primary-yellow)]">We</span> Document Every Food
                        <br />
                        Bean Process until it is saved
                    </h1>
                    <p className="w-full max-w-[651px] text-sm sm:text-base text-white tracking-wide text-center lg:text-right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-end justify-center lg:justify-end w-full max-w-[369px]">
                        <button className="text-white w-full lg:w-[190px] h-[50px] lg:h-[60px] border border-[var(--primary-yellow)] rounded-full font-bold">
                            Read More
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center bg-[var(--primary-yellow)] rounded-full">
                                <Image
                                    className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] object-cover object-center"
                                    src="/Play.png"
                                    alt=""
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <h3 className="text-white text-sm lg:text-base font-bold">Play Video</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <Image
                className="w-full h-[300px] sm:h-[400px] lg:h-[555px] top-0 right-0 object-cover object-center absolute -z-10"
                src="/process.jpeg"
                alt="Creative process"
                width={1918}
                height={558}
                quality={100}
            />
        </section>

    )
}

export default CreativeProcess