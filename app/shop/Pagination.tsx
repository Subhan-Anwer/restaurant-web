import Image from 'next/image'
import React from 'react'

const Pagination = () => {
    return (
        <div className='sm:w-[306px] w-[220px] h-[51px] flex items-center justify-between'>
            <div className='sm:w-[50px] w-[35px] sm:h-[50px] h-[35px] border-2 border-[#F2F2F2] flex items-center justify-center'>
                <Image className='w-[14px] h-[17px] object-contain object-center' src='/pgleft.png' alt='icon' width={50} height={50} quality={100} />
            </div>

            <div className='sm:w-[50px] w-[35px] sm:h-[50px] h-[35px] border-2 border-[#F2F2F2] text-[16px] sm:leading-[50px] leading-[35px] text-[var(--primary-yellow)] text-center'>1</div>
            <div className='sm:w-[50px] w-[35px] sm:h-[50px] h-[35px] border-2 border-[#F2F2F2] bg-[var(--primary-yellow)] text-[16px] sm:leading-[50px] leading-[35px] text-white text-center'>2</div>
            <div className='sm:w-[50px] w-[35px] sm:h-[50px] h-[35px] border-2 border-[#F2F2F2] text-[16px] sm:leading-[50px] leading-[35px] text-[var(--primary-yellow)] text-center'>3</div>

            <div className='sm:w-[50px] w-[35px] sm:h-[50px] h-[35px] border-2 border-[#F2F2F2] flex items-center justify-center'>
                <Image className='w-[14px] h-[17px] object-contain object-center' src='/pgright.png' alt='icon' width={50} height={50} quality={100} />
            </div>
        </div>
    )
}

export default Pagination