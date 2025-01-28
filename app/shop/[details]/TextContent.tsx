"use client";
import { useState } from "react"; import React from 'react'
import StarRating from '@/components/StarRating'
import Image from 'next/image'

const TextContent = ({ foodName, foodPrice, foodDescription }: { foodName: string, foodPrice: number, foodDescription: string }) => {
    // Initial states for quantity and total price
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(foodPrice);

    // Increment function
    const increment = () => {
        setCount(count + 1);
        setPrice((prevPrice) => prevPrice + foodPrice); // Add the base price to the current total
    };

    // Decrement function
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
            setPrice((prevPrice) => prevPrice - foodPrice); // Subtract the base price from the current total
        }
    };

    return (
        <div className='w-full max-w-[618px] lg:px-1 px-4 sm:px-6 h-auto'>
            <div className='flex flex-wrap gap-4 sm:flex-nowrap sm:gap-0 w-full justify-between items-center mb-4'>
                <div className='w-[86px] h-[28px] bg-[var(--primary-yellow)] rounded-md text-sm text-white leading-7 text-center'>
                    In stock
                </div>
                <div className='w-auto flex justify-between items-center gap-4'>
                    <div className='flex gap-1 items-center'>
                        <Image
                            className='w-[24px] h-[24px] object-contain object-center'
                            src='/right.png'
                            alt='icon'
                            width={24}
                            height={24}
                            quality={100}
                        />
                        <p className='text-sm sm:text-lg text-[#828282]'>Prev</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <p className='text-sm sm:text-lg text-[#828282]'>Next</p>
                        <Image
                            className='w-[24px] h-[24px] object-contain object-center'
                            src='/left.png'
                            alt='icon'
                            width={24}
                            height={24}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            {/* Heading */}
            <h1 className='text-2xl sm:text-5xl font-bold text-[#333333] mt-2 mb-6 text-center sm:text-left text-wrap'>
                {foodName}
            </h1>
            {/* Para */}
            <p className='w-full max-w-[608px] text-base sm:text-lg text-[#4f4f4f] mt-6 mb-8 text-center sm:text-left'>
                {foodDescription}
            </p>
            {/* Divider */}
            <div className='w-full h-[1px] bg-[#E0E0E0] mt-8 mb-8'></div>
            {/* Price $$ */}
            <h2 className='font-bold text-xl sm:text-[32px] text-[#333333] mt-8 mb-4'>
                ${price.toFixed(2)}
            </h2>
            {/* Rating */}
            <div className='w-full sm:max-w-[333px] h-[24px] flex justify-between mt-4 mb-[22px] leading-[24px] gap-2'>
                <StarRating stars={5} />
                <p className='text-sm sm:text-base text-[#828282]'>|</p>
                <p className='text-sm sm:text-base text-[#828282]'>5.0 Rating</p>
                <p className='text-sm sm:text-base text-[#828282]'>|</p>
                <p className='text-sm sm:text-base text-[#828282]'>22 Review</p>
            </div>
            {/* Dictum */}
            <h5 className='text-base sm:text-lg text-[#333333] mt-[22px] mb-[25px]'>
                Dictum/cursus/Risus
            </h5>
            {/* Buttons */}
            <div className='flex flex-col sm:flex-row text-center gap-4 sm:leading-[50px]'>
                <div className='flex justify-center sm:justify-start'>
                    <button
                        className='w-[60px] h-[50px] text-[20px] text-[#828282] border border-[#828282] hover:bg-[#f5f5f5] active:bg-[#d5d5d5] focus:outline-none'
                        onClick={decrement}
                    >
                        -
                    </button>
                    <div className='w-[60px] h-[50px] text-[#333333] font-bold text-[20px] border border-[#828282] flex items-center justify-center'>
                        {count}
                    </div>
                    <button
                        className='w-[60px] h-[50px] text-[20px] text-[#828282] border border-[#828282] hover:bg-[#f5f5f5] active:bg-[#d5d5d5] focus:outline-none'
                        onClick={increment}
                    >
                        +
                    </button>
                </div>
                <button className='w-full sm:w-[191px] h-[50px] bg-[var(--primary-yellow)] flex items-center justify-center gap-2 text-white hover:bg-[#ff920d] active:bg-[#ff6e0d] focus:outline-none'>
                    <div className='w-5 h-5 bg-center bg-cover bg-[url("/Bag.png")]'></div>
                    <p className='text-[18px]'>Add to cart</p>
                </button>
            </div>
            {/* Divider */}
            <div className='w-full h-[1px] bg-[#E0E0E0] mt-[34px] mb-6'></div>

            {/* Add to Wishlist & Compare */}
            <div className="flex gap-4 items-center mt-6">
                <div className="flex gap-2 items-center">
                    <div className="sm:w-5 sm:h-5 w-4 h-4 bg-center bg-cover bg-[url('/Heart.png')]"></div>
                    <p className="sm:text-lg text-base text-[#4f4f4f]">Add to Wishlist</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="sm:w-5 sm:h-5 w-4 h-4 bg-center bg-cover bg-[url('/GitDiff.png')]"></div>
                    <p className="sm:text-lg text-base text-[#4f4f4f]">Compare</p>
                </div>
            </div>
            {/* Category */}
            <div className="flex gap-2">
                <p className="sm:text-lg text-base text-[#333333]">Category:</p>
                <p className="sm:text-lg text-base text-[#4f4f4f]">Pizza</p>
            </div>
            {/* Tag */}
            <div className="flex gap-2">
                <p className="sm:text-lg text-base text-[#333333]">Tag:</p>
                <p className="sm:text-lg text-base text-[#4f4f4f]">Our Shop</p>
            </div>
            {/* Share */}
            <div className="flex gap-[6px] mt-6">
                <p className="sm:text-lg tex-base text-[#333333]">Share:</p>
                <div className="flex sm:gap-4 gap-3">
                    <Image className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] object-cover object-center" src={"/youtube.png"} alt="" width={24} height={24} />
                    <Image className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] object-cover object-center" src={"/fb.png"} alt="" width={24} height={24} />
                    <Image className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] object-cover object-center" src={"/twitterIcon.png"} alt="" width={24} height={24} />
                    <Image className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] object-cover object-center" src={"/vk.png"} alt="" width={24} height={24} />
                    <Image className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] object-cover object-center" src={"/insta.png"} alt="" width={24} height={24} />
                </div>
            </div>
            {/* Divivder */}
            <div className='max-w-[611px] w-full h-[1px] bg-[#E0E0E0] mt-4'></div>
        </div>

    )
}

export default TextContent