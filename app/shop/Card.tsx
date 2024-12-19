import Image from 'next/image'
import React from 'react'

const Card = ({ img, name, font = "bold", price, pricewas }: { img: string, name: string, font?: "bold" | "normal", price: string, pricewas?: string }) => {
    return (
        <div className='w-full sm:w-[312px] h-auto sm:h-[330px] bg-white'>
            <Image
                className='w-full h-auto sm:h-[267px] object-cover object-center'
                src={`/menu${img}.jpg`} alt="menu img"
                width={312} height={267} />

            <div className='flex flex-col mt-2 mb-[1px] gap-1 px-4 sm:px-0'>
                <h3 className={`text-lg text-[#333333] 
                    ${font === "bold" ? "font-bold" : "font-normal"}`}>{name}</h3>
                <div className='flex gap-2'>
                    <p className='text-[var(--primary-yellow)] text-base'>{price}</p>
                    {pricewas && (
                        <p className='text-[#828282] text-base line-through'>{pricewas}</p>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Card