import React from 'react'
import Image from 'next/image'

const Product = ({img, text1, text2}: {img: string, text1: string, text2: string}) => {
    return (
        <div className='w-[323px] h-[107px] flex flex-col justify-between'>

            <div className='w-full flex gap-4'>
                <Image
                    className='w-[99px] h-[91px] object-center object-cover rounded-md'
                    src={`/${img}`}
                    alt='img'
                    width={99}
                    height={91} />

                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-[#828282]'>{text1}</p>
                    <p className="w-[205px] text-base text-[#4f4f4f]">{text2}</p>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t"></div>
        </div>
    )
}

export default Product