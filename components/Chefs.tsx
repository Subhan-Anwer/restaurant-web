import React from 'react'
import ChefCard from './ChefCard'
import Link from 'next/link'

const Chefs = () => {
    return (
        <section className='text-white w-full min-h-[657px] my-24 py-10 flex flex-col items-center'>
            {/* Title */}
            <div className='flex flex-col justify-center items-center'>
                <h3 style={{ fontFamily: 'GreatVibes' }} className='text-3xl text-[var(--primary-yellow)] mb-5'>Chefs</h3>
                <h1 className="sm:text-6xl text-3xl mb-4 font-bold text-white">
                    <span className='text-[var(--primary-yellow)]'>Me</span>et Our Chef
                </h1>
            </div>

            {/* chefs cards */}
            <div className='gap-5 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-10'>
                <ChefCard
                    imgsrc='chef-1'
                    name="D.Estwood"
                    position='Chief Chef' />
                <ChefCard
                    imgsrc='chef-2'
                    name="D.Scoriesh"
                    position='Assistant Chef' />
                <ChefCard
                    imgsrc='chef-3'
                    name="M. William"
                    position='Advertising Chef' />
                <ChefCard
                    imgsrc='chef-4'
                    name="W.Readfroad"
                    position='Chef' />
            </div>
            <div className="flex w-[190px] justify-center mt-[80px]">
                <button className="  w-full h-[60px] leading-[60px] text-center  text-white border-[var(--primary-yellow)] border-2 transition ease-in-out duration-300 focus:outline-none hover:bg-[var(--primary-yellow)] rounded-[30px] text-lg">
                    <Link href={"/chefs"}>See More</Link>
                </button>
            </div>
        </section>
    )
}

export default Chefs