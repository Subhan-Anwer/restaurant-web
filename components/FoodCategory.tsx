import React from 'react'
import Image from 'next/image'

const FoodCategory = () => {
    return (
        <section className='relative w-full py-[60px] bg-[rgb(13,13,13)] flex items-center justify-center'>
            <div className='w-[1320px] min-h-[489px] h-auto'>
                {/* Title */}
                <div className='flex flex-col justify-center items-center'>
                    <h3 style={{ fontFamily: 'GreatVibes' }} className='text-3xl text-[var(--primary-yellow)] mb-5'> Food Category</h3>
                    <h1 className="sm:text-6xl text-3xl mb-4 font-bold text-white">
                        <span className='text-[var(--primary-yellow)]'>Ch</span>oose Food Iteam
                    </h1>
                </div>
                {/* Image box */}
                <div className="max-w-full w-[95%] mx-auto h-auto mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    <Image
                        className='w-[306px] h-[329px] justify-self-center object-cover object-center rounded-[6px]'
                        src="/food-1.jpeg" alt="image"
                        width={1320} height={329} >
                    </Image>
                    <Image
                        className='w-[306px] h-[329px] justify-self-center object-cover object-center rounded-[6px]'
                        src="/food-2.jpeg" alt="image"
                        width={1320} height={329} >
                    </Image>
                    <Image
                        className='w-[306px] h-[329px] justify-self-center object-cover object-center rounded-[6px]'
                        src="/food-3.jpeg" alt="image"
                        width={1320} height={329} >
                    </Image>
                    <Image
                        className='w-[306px] h-[329px] justify-self-center object-cover object-center rounded-[6px]'
                        src="/food-4.jpeg" alt="image"
                        width={1320} height={329} >
                    </Image>
                </div>
            </div>
            <Image
          className="w-[444px] h-[532px] absolute top-52 left-[80rem] z-[1] opacity-[20%]"
          src="/leaf2.png" alt="leaf-2" width={600} height={600}></Image>
        </section>
    )
}

export default FoodCategory