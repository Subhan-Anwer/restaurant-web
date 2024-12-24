import Image from 'next/image'
import React from 'react'

const Menu = ({img, title, num}: {img: string, title: string, num: number}) => {
  return (
    <div className='w-[311px] h-[62px] flex gap-4'>
        <Image
            className='object-center object-cover rounded-md'
            src={`/${img}`}
            alt="menu"
            width={67}
            height={62}/>
        
        <div className="w-[227px] flex items-center justify-between text-[#333333] text-base">
            <p className='font-bold'>{title}</p>
            <p className='text-base text-[#828282]'>{num}</p>
        </div>
    </div>
  )
}

export default Menu