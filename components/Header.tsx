import React from 'react'
import Navbar from './DefaultNavbar'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({title, link}: {title: string, link: string}) => {
  return (
    <section className='w-full h-[410px]'>
      {/* Navbar */}
      <Navbar />
      <div className='bg-[url("/header.jpeg")] bg-center bg-cover bg-no-repeat'>
        <div className='w-full relative h-[320px] flex items-center justify-center'>
          <div className='h-[104px] flex flex-col justify-between z-10 items-center self-center justify-self-center'>
            <h1 className='sm:text-5xl text-4xl text-white font-bold'>{title}</h1>
            <div className='min-w-[133px] w-[auto] h-[28px] flex items-center justify-between gap-[6px]'>
              <Link href={"/"}><p className='text-[20px] leading-[28px] text-white'>Home</p></Link>
              <Image className='w-[10px] h-[15px]' src="/caret.png" alt="icon" width={100} height={100} quality={100} />
              <p className='text-[20px] leading-[28px] text-[var(--primary-yellow)]'>{link}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header