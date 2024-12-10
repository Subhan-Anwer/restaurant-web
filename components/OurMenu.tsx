import React from 'react'
import Image from 'next/image'
import MenuCard from './MenuCard'

const OurMenu = () => {
    return (
        <section className='text-white max-w-[1320px] w-full min-h-[656px] my-5 py-10 flex justify-center justify-self-center'>
            <div className='flex flex-col items-center'>
                {/* Title */}
                <div className='w-full flex flex-col justify-center items-center'>
                    <h3 style={{ fontFamily: 'GreatVibes' }} className='text-3xl text-[var(--primary-yellow)] mb-5'>Choose & pick</h3>
                    <h1 className="sm:text-6xl text-3xl mb-4 font-bold text-white">
                        <span className='text-[var(--primary-yellow)]'>Fr</span>om Our Menu
                    </h1>
                </div>

                {/* Text */}
                <div className='xl:w-[1056px] lg:w-[1000px] md:w-[750px] sm:w-[600px] w-[320px] min-h-[28px] flex sm:flex-nowrap flex-wrap sm:justify-between justify-evenly sm:gap-0 gap-3 items-center my-10'>
                    <p className='font-bold text-[20px] text-[var(--primary-yellow)]'>Breakfast</p>
                    <p className='text-[20px]'>Lunch</p>
                    <p className='text-[20px]'>Dinner</p>
                    <p className='text-[20px]'>Desert</p>
                    <p className='text-[20px]'>Drink</p>
                    <p className='text-[20px]'>Snack</p>
                    <p className='text-[20px]'>Suops</p>
                </div>

                <div className='grid xl:grid-cols-3 gap-12 mb-10'>
                    {/* Image */}
                    <div className='w-[500px] flex justify-center items-center relative my-7 mx-auto'>

                        <Image
                            className='w-[366px] h-[362px] object-cover object-center mx-auto'
                            src={"/menu-img.png"} alt="menu-img"
                            width={1320} height={656}>
                        </Image>

                        <Image
                            className='w-[515px] h-[406px] object-cover absolute object-center mx-auto -z-10'
                            src={"/dill.png"} alt="menu-img"
                            width={1320} height={656}>
                        </Image>

                    </div>

                    {/* Cards */}
                    <div className='grid lg:grid-cols-2 grid-cols-1 xl:gap-[28rem] gap-6 justify-self-center'>
                        {/* Card Column 1 */}
                        <div className='bg flex flex-col gap-4 my-auto xl:ml-10'>
                            {/* Card 1 */}
                            <MenuCard
                                imgsrc="card-1.jpeg"
                                title="Lettuce Leaf"
                                price="12.5$" />


                            {/* Card 2 */}
                            <MenuCard
                                imgsrc="card-2.jpeg"
                                title="Fresh Breakfast"
                                price="12.5$" />


                            {/* Card 3 */}
                            <MenuCard
                                imgsrc="card-3.jpeg"
                                title="Mild Butter"
                                price="12.5$" />


                            {/* Card 4 */}
                            <MenuCard
                                imgsrc="card-4.jpeg"
                                title="Fresh Bread"
                                price="12.5$" />
                        </div>

                        {/* Card Column 2 */}
                        <div className='bg flex flex-col gap-4 my-auto'>
                            {/* Card 1 */}
                            <MenuCard
                                imgsrc="card-5.jpeg"
                                title="Glow Cheese"
                                price="12.5$" />

                            {/* Card 2 */}
                            <MenuCard
                                imgsrc="card-6.jpeg"
                                title="Italian Pizza"
                                price="12.5$" />

                            {/* Card 3 */}
                            <MenuCard
                                imgsrc="card-7.jpeg"
                                title="Sllice Beef"
                                price="14.5$" />

                            {/* Card 4 */}
                            <MenuCard
                                imgsrc="card-8.jpeg"
                                title="Mushaom Pizza"
                                price="12.5$" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OurMenu