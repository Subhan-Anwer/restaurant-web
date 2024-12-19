import Image from 'next/image'
import React from 'react'

const Product = ({name}: {name:string}) => {
    return (
        <div className='w-[252px] h-[67px] flex gap-4'>
            <Image
                className='w-[71px] h-[65px] object-cover object-center'
                src={"/product.jpg"} alt='product'
                width={71} height={65} quality={100} />

            <div className='flex flex-col'>
                <h3 className='text-base text-[#4f4f4f]'>{name}</h3>
                <div className='flex gap-1 items-center mt-2 mb-1'>
                    <Image
                        className='w-[10px] h-[9px] object-cover object-center'
                        src={"/star.png"} alt='product'
                        width={20} height={20} quality={100} />
                    <Image
                        className='w-[10px] h-[9px] object-cover object-center'
                        src={"/star.png"} alt='product'
                        width={20} height={20} quality={100} />
                    <Image
                        className='w-[10px] h-[9px] object-cover object-center'
                        src={"/star-white.png"} alt='product'
                        width={20} height={20} quality={100} />
                    <Image
                        className='w-[10px] h-[9px] object-cover object-center'
                        src={"/star-white.png"} alt='product'
                        width={20} height={20} quality={100} />
                    <Image
                        className='w-[10px] h-[9px] object-cover object-center'
                        src={"/star-white.png"} alt='product'
                        width={20} height={20} quality={100} />
                </div>
                <h3 className='text-sm text-[#4f4f4f]'>$35.00</h3>
            </div>
        </div>
    )
}

export default Product