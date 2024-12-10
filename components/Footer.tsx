import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='max-w-[1923px] w-full h-[740px] flex flex-col items-center text-white'>
            {/* Top */}
            <div className='w-[1170px] h-[142px] flex flex-col'>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-[32px] leading-[40px] '><span className='text-[var(--primary-yellow)]'>St</span>ill You Need Our Support ?</h2>
                    <div className='flex '>
                        <div className='text-white w-[296px] text-[16px] leading-6 p-4 h-[56px] rounded-l-[6px] bg-[var(--primary-yellow)]'>Enter Your Email</div>
                        <div className='text-[var(--primary-yellow)] text-[16px] leading-6 p-4 w-[163px] h-[56px] rounded-r-[6px] bg-white'>Subscribe Now</div>
                    </div>
                </div>
                <p>Dont wait make a smart & logical quote here. Its pretty easy.</p>
                <div className='w-[1170px] h-[1px] bg-[var(--primary-yellow)] mt-12'></div>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='font-bold text-[24px] leading-[32px]'>About Us.</h3>
                <p className='w-[312px]'>orporate clients and leisure travelers has
                    been relying on Groundlink for dependab
                    safe, and professional chauffeured car
                    service in major cities across World.</p>
                <div className='flex gap-4'>
                    <Image src={"/clock.png"} alt="" width={32} height={32}></Image>
                </div>
            </div>
        </div>
    )
}

export default Footer