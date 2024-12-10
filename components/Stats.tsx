import React from 'react'
import Image from 'next/image'

const Stats = () => {
    return (
        <section className='w-full min-h-[469px] h-auto my-20 flex bg-[rgb(13,13,13)] items-center justify-center relative'>
            <Image
                className='absolute max-w-[1923px] w-full h-full object-cover object-center opacity-[15%] -z-0'
                src="/stats.jpeg" alt="stats"
                width={1320} height={469} quality={100}>
            </Image>

            <div className='w-[1319px] min-h-[247px]  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-8 text-white'>
                {/* 1 */}
                <div className='w-[218px] h-[247px] mx-auto flex flex-col items-center justify-around'>
                    <Image
                        className='w-[120px] h-[120px] object-cover object-center'
                        src="/chef-icon.png" alt="stats-1"
                        width={218} height={247} quality={100}>
                    </Image>
                    <p className='text-2xl font-bold'>Professional Chefs</p>
                    <p className='text-[2.5rem] leading-[125%] font-bold'>420</p>
                </div>
                {/* 2 */}
                <div className='w-[162px] h-[247px] mx-auto flex flex-col items-center justify-around'>
                    <Image
                        className='w-[120px] h-[120px] object-cover object-center'
                        src="/food-icon.png" alt="stats-1"
                        width={218} height={247} quality={100}>
                    </Image>
                    <p className='text-2xl font-bold'>Items Of Food</p>
                    <p className='text-[2.5rem] leading-[125%] font-bold'>320</p>
                </div>
                {/* 3 */}
                <div className='w-[248px] h-[247px] mx-auto flex flex-col items-center justify-around'>
                    <Image
                        className='w-[120px] h-[120px] object-cover object-center'
                        src="/fork-icon.png" alt="stats-1"
                        width={218} height={247} quality={100}>
                    </Image>
                    <p className='text-2xl font-bold'>Years Of Experienced</p>
                    <p className='text-[2.5rem] leading-[125%] font-bold'>30+</p>
                </div>
                {/* 4 */}
                <div className='w-[208px] h-[247px] mx-auto flex flex-col items-center justify-around'>
                    <Image
                        className='w-[120px] h-[120px] object-cover object-center'
                        src="/pizza-icon.png" alt="stats-1"
                        width={218} height={247} quality={100}>
                    </Image>
                    <p className='text-2xl font-bold'>Happy Customers</p>
                    <p className='text-[2.5rem] leading-[125%] font-bold'>220</p>
                </div>
            </div>
        </section>
    )
}

export default Stats