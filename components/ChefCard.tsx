import Image from 'next/image'
import React from 'react'

const ChefCard = ({imgsrc, name, position}: {imgsrc:string, name:string, position:string}) => {
  return (
    <div className='w-[312px] h-[391px] flex rounded-[6px] relative sm:scale-100 scale-90'>
      <Image className='absolute w-full h-full object-cover object-center -z-10 rounded-[6px]' 
        src={`/${imgsrc}.jpeg`} alt='chef img' quality={100} width={500} height={500} />
      <div className='w-[181px] h-[67px] bg-white self-end text-black flex flex-col items-start justify-center pl-5 rounded-bl-[6px]'>
        <p className='text-[18px] leading-[26px] font-bold'>{name}</p>
        <p className='text-[18px] leading-[26px]'>{position}</p>
      </div>
    </div>
  )
}

export default ChefCard