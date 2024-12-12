import Image from 'next/image'
import React from 'react'

const BlogCard = ({ text, img }: { text: string; img: string }) => (
    <div className="w-full max-w-[424px] h-auto flex flex-col gap-10 items-center border text-white mx-auto">
        {/* Image */}
        <div className="w-full h-[200px] sm:h-[300px] lg:h-[349px]">
            <Image
                className="w-full h-full text-white object-cover object-center"
                src={`/${img}.jpeg`}
                alt="blog img"
                width={423}
                height={349}
                quality={100}
            />
        </div>
        <div className="w-full max-w-[338px] flex flex-col items-start gap-3 justify-center text-left px-4 lg:px-0">
            <p className="text-base text-[var(--primary-yellow)]">10 February 2022</p>
            <h3 className="text-xl sm:text-2xl font-bold">{text}</h3>
            <div className="w-full flex justify-between items-center">
                <p className="tracking-wider">Learn More</p>
                {/* Icons */}
                <div className="flex gap-3 items-center">
                    <Image
                        className="w-5 h-5 object-cover object-center"
                        src="/ThumbsUp.png"
                        width={20}
                        height={20}
                        alt="icon"
                    />
                    <Image
                        className="w-5 h-5"
                        src="/ChatDots.png"
                        width={20}
                        height={20}
                        alt="icon"
                    />
                    <Image
                        className="w-5 h-5"
                        src="/ShareNetwork.png"
                        width={20}
                        height={20}
                        alt="icon"
                    />
                </div>
            </div>
        </div>
    </div>
);


export default BlogCard