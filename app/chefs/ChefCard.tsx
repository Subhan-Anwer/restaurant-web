import React from 'react'
import Image from 'next/image'

const ChefCard = ({ img, name, position }: { img: string, name: string, position: string }) => {
  return (
    <div className=' w-[312px] h-[446px] justify-self-center'>
      <Image
        src={img}
        alt={`${name}'s image`}
        width={312} height={446}
        className='w-full h-[379px] object-cover object-center border'
      />
      <div className='bg-white w-full h-[67px] text-center flex flex-col justify-evenly'>
        <h3 className='text-xl text-[#333333] font-bold'>{name}</h3>
        <p className='text-lg text-[#333333]'>{position}</p>
      </div>
    </div>
  )
}

export default ChefCard