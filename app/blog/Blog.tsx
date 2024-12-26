import Image from 'next/image'
import React from 'react'

const Blog = ({ img, heading, button = true }: { img: string, heading: string, button?: boolean }) => {
    return (
        <div className='flex flex-col gap-4'>
            <Image className='w-[871px] h-[520px] object-cover object-center' src={`/${img}`} alt='img' width={871} height={520} quality={100} />
            {/* numbers */}
            <div className="flex flex-wrap gap-2 text-sm sm:text-base">
                <Image className='object-cover object-center' src="/Calendar.png" alt='icon' width={23} height={24} />
                <p className="text-[16px] text-[#4F4F4F]">Feb 14, 2022</p>
                <p className="text-[16px] text-[#4F4F4F]">/</p>
                <Image className='object-cover object-center' src="/Chats.png" alt='icon' width={24} height={24} />
                <p className="text-[16px] text-[#4F4F4F]">3</p>
                <p className="text-[16px] text-[#4F4F4F]">/</p>
                <Image className='object-cover object-center' src="/admin.png" alt='icon' width={24} height={24} />
                <p className="text-[16px] text-[#4F4F4F]">Admin</p>
            </div>
            {/* Heading */}
            <h2 className='font-bold text-xl sm:text-2xl text-[#333333]'>{heading}</h2>
            {/* Divider */}
            <div className='max-w-[694px] w-[85%] h-0 border-t mt-6'></div>
            {/* description */}
            <p className='max-w-[647px] h-auto text-[16px] text-[#4F4F4F] my-6'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            {/* button */}
            {button && (
                <button className="w-[172px] h-[52px] border border-[var(--primary-yellow)] rounded-md flex gap-[10px] items-center justify-center text-[var(--primary-yellow)] hover:text-white hover:bg-[var(--primary-yellow)] focus:outline-none active:bg-[#ff6e0d] transition-all duration-100 group">
                    <p className="text-[16px]">Read More</p>
                    <Image
                        className="object-cover object-center transition-all duration-100 group-hover:brightness-0 group-hover:invert"
                        src="/ArrowLineUpRight.png"
                        alt="icon"
                        width={18}
                        height={18}
                    />
                </button>
            )}


        </div>
    )
}

export default Blog