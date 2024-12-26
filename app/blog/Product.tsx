import React from 'react'
import Image from 'next/image'

const Product = ({ img, text1, text2 }: { img: string, text1: string, text2: string }) => {
    return (
        <div className="max-w-[323px] w-full h-auto flex flex-col justify-between">
            <div className="w-full flex gap-3 sm:gap-4">
                <Image
                    className="w-[60px] h-[61px] sm:w-[99px] sm:h-[91px] object-center object-cover rounded-md"
                    src={`/${img}`}
                    alt="img"
                    width={99}
                    height={91}
                />
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-[#828282]">{text1}</p>
                    <p className="w-[75%] sm:w-[205px] text-sm sm:text-base text-[#4f4f4f]">{text2}</p>
                </div>
            </div>
            {/* Divider */}
            <div className="w-full border-t mt-3"></div>
        </div>

    )
}

export default Product