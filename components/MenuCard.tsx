import React from 'react'
import Image from 'next/image'

const MenuCard = ({imgsrc, title, price}: {imgsrc:string, title:string, price:string} ) => {
    return (
        <div className='sm:w-[376px] w-[320px] min-h-[79px] sm:items-start items-center flex sm:flex-row flex-col gap-3'>
            <Image
                className='sm:w-[80px] w-[220px] h-[79px]  object-cover object-center rounded-[6px]'
                src={`/${imgsrc}`} alt="card-img"
                width={1320} height={656}>
            </Image>
            {/* Text */}
            <div className='flex flex-col sm:items-start items-center justify-between sm:mb-0 mb-8'>
                <p className='text-xl font-bold'>{title}</p>
                <p className='text-sm sm:w-auto w-[220px] sm:text-left text-center'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-lg font-bold text-[var(--primary-yellow)]'>{price ? price : "12.5$"}</p>
            </div>
        </div>
    )
}

export default MenuCard