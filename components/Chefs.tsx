import React from 'react'
import ChefCard from './ChefCard'

const Chefs = () => {
    return (
        <section className='text-white w-full h-[657px] my-24 py-10 flex flex-col items-center'>
            {/* Title */}
            <div className='flex flex-col justify-center items-center'>
                <h3 style={{ fontFamily: 'GreatVibes' }} className='text-3xl text-[var(--primary-yellow)] mb-5'>Chefs</h3>
                <h1 className="sm:text-6xl text-3xl mb-4 font-bold text-white">
                    <span className='text-[var(--primary-yellow)]'>Me</span>et Our Chef
                </h1>
            </div>

            {/* chefs cards */}
            <div className='gap-5 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
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
        </section>
    )
}

export default Chefs