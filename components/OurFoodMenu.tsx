import React from 'react'

const OurFoodMenu = () => {
    return (
        <section className="w-full min-h-[1000px] flex items-center mx-auto justify-center">
            <div className="max-w-[1320px] w-full flex flex-col items-center px-4">
                {/* Title */}
                <div className="h-auto max-w-[418px] w-full bg-[url('/leaf-3.png')] bg-center bg-contain bg-no-repeat flex flex-col gap-2 text-center">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333]">
                        Our Food Menu
                    </h1>
                    <p className="text-sm sm:text-base text-[#4F4F4F]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
                        pharetra dictum neque massa congue
                    </p>
                </div>

                {/* Category */}
                <div className="max-w-[1320px] w-full h-auto gap-6 mt-8 flex flex-col items-center">
                    <div className="w-full max-w-[622px] flex flex-wrap justify-between gap-4 text-center">
                        <h5 className="text-sm md:text-xl text-[var(--primary-yellow)]">
                            Breakfast
                        </h5>
                        <h5 className="text-sm md:text-xl text-[#4f4f4f]">Lunch</h5>
                        <h5 className="text-sm md:text-xl text-[#4f4f4f]">Dinner</h5>
                        <h5 className="text-sm md:text-xl text-[#4f4f4f]">Dessert</h5>
                        <h5 className="text-sm md:text-xl text-[#4f4f4f]">Drink</h5>
                        <h5 className="text-sm md:text-xl text-[#4f4f4f]">Snack</h5>
                    </div>
                    <div className="w-full h-[1px] bg-[#E0E0E0] mb-8">
                        <div className="w-[88px] h-full bg-[var(--primary-yellow)] mx-auto"></div>
                    </div>
                </div>

                {/* Menu */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-full p-4 flex flex-col justify-center"
                        >
                            <div className="w-full flex justify-between">
                                <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-[#333333]">
                                    Alder Grilled Chinook Salmon
                                </h4>
                                <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-[#333333]">
                                    32$
                                </h4>
                            </div>
                            <p className="text-sm md:text-base text-[#4f4f4f] my-2">
                                Toasted French bread topped with romano, cheddar
                            </p>
                            <p className="text-xs md:text-sm text-[#828282]">560 CAL</p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="w-[142px] h-[52px] mt-10 border border-[var(--primary-yellow)] text-[var(--primary-yellow)] leading-[52px] text-base text-center">
                    View menu
                </div>
            </div>
        </section>

    )
}

export default OurFoodMenu