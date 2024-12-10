import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative text-white bg-[rgba(13,13,13,0.95)]">
            <div className="container mx-auto flex px-5 py-24 md:flex-row lg:gap-24 flex-col items-center">



                <div className="max-w-[570px] md:w-1/2 lg:pr-5 md:pr-16 flex  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">


                    <div className='mr-10 flex flex-col items-center gap-5'>
                        <div className='w-[1px] h-[125px] bg-white'></div>
                        <div className='w-[25px] h-[107px] flex flex-col gap-5 items-center'>
                            <img className='w-[18px]' src="/facebook-icon.png" alt="" />
                            <img className='w-[18px]' src="/twitter.png" alt="" />
                            <img className='w-[18px]' src="/pinterest.png" alt="" />
                        </div>
                        <div className='w-[1px] h-[125px] bg-white'></div>
                    </div>

                    <div className='flex-col '>
                        <h3 style={{ fontFamily: 'GreatVibes' }} className='text-3xl text-[var(--primary-yellow)] mb-5'>Its Quick & Amusing!</h3>
                        <h1 className="sm:text-6xl text-3xl mb-4 font-bold text-white">
                            <span className='text-[var(--primary-yellow)]'>Th</span>e Art of speed
                            <br className="hidden lg:inline-block" />
                            food Quality
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Varius sed pharetra dictum neque massa congue
                        </p>
                        <div className="flex w-[190px] justify-center">
                            <button className="  w-full h-[60px] leading-[60px] text-center  text-white bg-[var(--primary-yellow)] border-0 transitio ease-in-out duration-300 focus:outline-none hover:bg-[var(--primary-green)] rounded-[30px] text-lg">
                                See Menu
                            </button>
                        </div>
                    </div>
                </div>


                <div className="lg:max-w-[37rem] lg:w-full md:w-1/2 w-5/6 ">
                    <Image
                        width={900}
                        height={900}
                        quality={100}
                        className="object-cover "
                        alt="hero"
                        src="/image.png"
                    ></Image>

                </div>
            </div>
            
        </section>

    )
}

export default Hero


