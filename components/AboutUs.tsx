import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutUs = () => {
    return (
        <section className="relative text-white bg-[rgba(13,13,13,0.95)] justify-self-center">
            <div className="container mx-auto flex px-5 py-24 md:flex-row lg:gap-24 flex-col items-center">



                <div className="max-w-[570px] md:w-1/2 lg:pr-2 md:pr-16 flex  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">




                    <div className='flex-col bg-late-600'>
                        <h3 style={{ fontFamily: 'GreatVibes' }} className='text-3xl text-[var(--primary-yellow)] mb-5'>About us</h3>
                        <h1 className="sm:text-6xl text-3xl mb-4 font-bold text-white">
                            <span className='text-[var(--primary-yellow)]'>We</span> Create the best
                            <br className="hidden lg:inline-block" />
                            foody product
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </p>
                        <p className="mb-3 leading-relaxed text-[18px] font-thin">
                            <Image className='inline mr-3 w-auto h-auto' src="/check.png" width={17} height={12} alt="check" />
                            Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </p>
                        <p className="mb-3 leading-relaxed text-[18px] font-thin">
                            <Image className='inline mr-3 w-auto h-auto' src="/check.png" width={17} height={12} alt="check" />
                            Quisque diam pellentesque bibendum non dui volutpat fringilla
                        </p>
                        <p className="mb-6 leading-relaxed text-[18px] font-thin">
                            <Image className='inline mr-3 w-auto h-auto' src="/check.png" width={17} height={12} alt="check" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        <div className="flex w-[190px] justify-center">
                            <button className="  w-full h-[60px] leading-[60px] text-center  text-white bg-[var(--primary-yellow)] border-0 transitio ease-in-out duration-300 focus:outline-none hover:bg-[var(--primary-green)] rounded-[30px] text-lg">
                                <Link href={"/about"}>Read More</Link>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="lg:max-w-[37rem] lg:w-[80%] md:w-1/2 w-5/6 ">
                    <Image
                        width={900}
                        height={900}
                        quality={100}
                        className="object-cover xl:w-[660px] xl:h-[320px] lg:w-[483px] lg:h-[234px] sm:w-[500px] sm:h-[250px]  w-[300px] h-[150px] rounded-[6px]"
                        alt="hero"
                        src="/large-image.jpeg"
                    ></Image>
                    <div className='flex sm:flex-row flex-col'>
                        <Image
                            width={900}
                            height={900}
                            quality={100}
                            className="object-cover xl:w-[322px] xl:h-[194px] lg:w-[238px] lg:h-[150px] rounded-[6px] mt-5 xl:mr-[8px] sm:mr-[4px] w-[300px] h-[150px]"
                            alt="hero"
                            src="/small-image-1.jpeg"
                        ></Image>
                        <Image
                            width={900}
                            height={900}
                            quality={100}
                            className="object-cover xl:w-[322px] xl:h-[194px] lg:w-[238px] lg:h-[150px] rounded-[6px] mt-5 xl:ml-[8px] sm:ml-[4px] w-[300px] h-[150px]"
                            alt="hero"
                            src="/small-image-2.jpeg"
                        ></Image>
                    </div>

                </div>



            </div>

        </section>
    )
}

export default AboutUs