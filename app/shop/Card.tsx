import Image from 'next/image'
import React from 'react'

const Card = ({ img, name, font = "bold", price, pricewas, icons = false }: { img: string, name: string, font?: "bold" | "normal", price: string, pricewas?: string, icons?: boolean }) => {
    return (
        <div className='w-full sm:w-[312px] h-auto sm:h-[330px] bg-white relative'>
            <Image
                className='w-full h-auto sm:h-[267px] object-cover object-center'
                src={`/menu${img}.jpg`} alt="menu img"
                width={312} height={267} />

            <div className='flex flex-col mt-2 mb-[1px] gap-1 px-4 sm:px-0 border'>
                <h3 className={`text-lg text-[#333333] 
                    ${font === "bold" ? "font-bold" : "font-normal"}`}>{name}</h3>
                <div className='flex gap-2'>
                    <p className='text-[var(--primary-yellow)] text-base'>{price}</p>
                    {pricewas && (
                        <p className='text-[#828282] text-base line-through'>{pricewas}</p>
                    )}
                </div>
            </div>

            {/* Icons */}
            {icons &&(<div className="absolute top-[45%] bottom-[45%] left-[26%] right-[26%]">
                <div className='w-[146px] h-[34px] flex justify-between items-center text-black'>
                    <div className="w-10 h-full bg-white bg-center bg-fill bg-no-repeat bg-[url('/status.png')]"></div>
                    <div className="w-10 h-full bg-[var(--primary-yellow)] bg-center bg-fill bg-no-repeat bg-[url('/bag.png')]"></div>
                    <div className="w-10 h-full bg-white bg-center bg-fill bg-no-repeat bg-[url('/heart2.png')]"></div>
                </div>
            </div>)}
        </div>
    )
}


export default Card