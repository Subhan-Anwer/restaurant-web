import Image from 'next/image'
import React from 'react'

const Menu = ({img, title, num}: {img: string, title: string, num: number}) => {
  return (
    <div className='sm:w-[311px] w-[90%] h-[62px] flex gap-4 justify-between'>
        <Image
            className='object-center object-cover rounded-md'
            src={`/${img}`}
            alt="menu"
            width={67}
            height={62}/>
        
        <div className="w-[227px] flex items-center justify-between text-[#333333] sm:text-base text-sm">
            <p className='font-bold'>{title}</p>
            <p className='text-[#828282]'>{num}</p>
        </div>
    </div>
  )
}

export default Menu