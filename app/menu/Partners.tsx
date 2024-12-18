import React from 'react'
import Image from 'next/image'

const Partners = () => {
    return (
        <section className='max-w-[1322px] w-full min-h-[275px] mt-[120px] mx-auto text-center'>
            <p className='text-lg text-[#333333] mb-2'>Partners & Clients</p>
            <h2 className='font-bold text-5xl text-[#333333] mb-14'>We work with the best pepole</h2>
            {/* Logos */}
            <div className='w-full min-h-[129px] flex flex-wrap items-center lg:justify-between justify-evenly'>
                <Image className='w-[240px] h-[129px] object-cover object-center opacity-30' src={"/logo1.png"} alt='logo' width={240} height={129} />
                <Image className='w-[166px] h-[128px] object-cover object-center opacity-30' src={"/logo2.png"} alt='logo' width={166} height={128} />
                <Image className='w-[143px] h-[127px] object-cover object-center opacity-30' src={"/logo3.png"} alt='logo' width={143} height={127} />
                <Image className='w-[130px] h-[129px] object-cover object-center opacity-30' src={"/logo4.png"} alt='logo' width={130} height={129} />
                <Image className='w-[169px] h-[129px] object-cover object-center opacity-30' src={"/logo5.png"} alt='logo' width={169} height={129} />
                <Image className='w-[103px] h-[115px] object-cover object-center opacity-30' src={"/logo6.png"} alt='logo' width={103} height={115} />
            </div>
        </section>
    )
}

export default Partners