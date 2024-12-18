import React from 'react'
import Image from 'next/image'

const Chicken = () => {
    return (


        <div className="w-full h-auto border-b mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
            <Image
                className="w-[83px] h-[88px] object-cover"
                src="/chicken.jpg"
                alt="Img"
                width={83}
                height={88}
            />
            <div className="flex flex-col text-center sm:text-left">
                <h4 className="text-base font-bold text-[#333333]">
                    Chicken Tikka Kabab
                </h4>
                <p className="text-sm text-[#4f4f4f] mt-2 mb-1">150 gm net</p>
                <p className="text-sm text-[#4f4f4f]">50$</p>
            </div>
        </div>
    )
}

export default Chicken