import React from 'react'
import Image from 'next/image'

const Pagination = () => {
    return (
        <div className='w-[306px] h-[51px] self-center flex items-center justify-between text-center text-[var(--primary-yellow)] text-[16px] leading-[50px]'>
            <div className='w-[50px] h-[50px] border flex items-center justify-center'>
                <Image src='/pgleft.png' width={14} height={17} alt='pgleft' />
            </div>
            <div className='w-[50px] h-[50px] border'>1</div>
            <div className='w-[50px] h-[50px] bg-[var(--primary-yellow)] text-white'>2</div>
            <div className='w-[50px] h-[50px] border'>3</div>
            <div className='w-[50px] h-[50px] border flex items-center justify-center'>
                <Image src='/pgright.png' width={14} height={17} alt='pgright' />
            </div>
        </div>
    )
}

export default Pagination