import React from 'react'
import StarRating from '@/components/StarRating'
import Image from 'next/image'
import Link from 'next/link'
import Product from './Product'
import Menu from './Menu'

const Sidebar = () => {
    return (
        <div className="max-w-[424px] md:w-[40%] w-[95%] min-h-[2501px] h-auto flex flex-col items-center gap-6">
            {/* Search box */}
            <div className='w-full h-[70px] flex'>
                <input type="text" placeholder='Search Your Keyword...' className='sm:text-base text-sm border-2 sm:w-[348px] w-[82%] sm:p-5 p-3' />
                <button className="w-[76px] h-[70px] bg-[var(--primary-yellow)] hover:bg-[#ff920d] active:bg-[#ff6e0d] focus:outline-none group">
                    <Image
                        className="object-center object-cover mx-auto transform transition-transform duration-300 group-hover:scale-125"
                        src="/search.svg"
                        alt="icon"
                        width={24}
                        height={24}
                    />
                </button>

            </div>

            {/* Prince Miyako */}
            <div className="w-full min-h-[423px] h-auto flex flex-col items-center justify-center border-2 text-center">
                {/* Image */}
                <div className="w-[115px] h-[115px] rounded-[50%] mb-[25px]">
                    <Image
                        className="object-center object-cover rounded-[50%]"
                        src="/prince-miyako.jpeg"
                        alt="prince miyako"
                        width={115}
                        height={115}
                        quality={100}
                    />
                </div>

                {/* Name*/}
                <h3 className='font-bold text-[#333333] text-xl mb-[3px]'>Prince Miyako</h3>
                {/* Job */}
                <h5 className='text-base text-[#828282] mb-[8px]'>Blogger/Photographer</h5>
                {/* Ratiing */}
                <div className="flex items-center gap-[9px] mb-[8px]">
                    <StarRating stars={5} />
                    <p className='text-sm text-[#828282]'>(1 Review)</p>
                </div>
                {/* About prince */}
                <p className="sm:w-[321px] w-[85%] text-[#828282] sm:text-base text-sm mb-[25px]">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.Veritatis distinctio, odio
                    eligendi suscipit reprehenderit atque
                </p>
                {/* icons */}
                <div className="flex items-center gap-[13px]">
                    <Link target='_blank' href="https://www.facebook.com">
                        <Image
                            className="object-center object-cover"
                            src="/f.png"
                            alt="facebook"
                            width={11}
                            height={19}
                        />
                    </Link>

                    <Link target='_blank' href="https://www.twitter.com/">
                        <Image
                            className="object-center object-cover"
                            src="/t.png"
                            alt="twitter"
                            width={18}
                            height={19}
                        />
                    </Link>

                    <Link target='_blank' href="https://www.instagram.com">
                        <Image
                            className="object-center object-cover"
                            src="/i.png"
                            alt="instagram"
                            width={16}
                            height={19}
                        />
                    </Link>

                    <Link target='_blank' href="https://www.pinterest.com">
                        <Image
                            className="object-center object-cover"
                            src="/p.png"
                            alt="instagram"
                            width={18}
                            height={19}
                        />
                    </Link>
                </div>
            </div>

            {/* Recent Post */}
            <div className="w-full min-h-[592px] h-auto border-2 pt-8 lg:px-[50px] px-5">
                <h1 className='font-bold text-xl text-[#333333] mb-6'>Recent Post</h1>

                {/* Post */}
                <div className='flex flex-col gap-4'>
                    <Product img='product-6.jpeg' text1='June 22, 2020' text2='Lorem ipsum dolor sit cing elit, sed do.' />
                    <Product img='menu2.jpg' text1='June 22, 2020' text2='Lorem ipsum dolor sit cing elit, sed do.' />
                    <Product img='why-image-6.jpeg' text1='June 22, 2020' text2='Lorem ipsum dolor sit cing elit, sed do.' />
                    <Product img='choc-glass.jpeg' text1='June 22, 2020' text2='Lorem ipsum dolor sit cing elit, sed do.' />
                </div>
            </div>

            {/* Filter by menu */}
            <div className="w-full h-[490px] border-2 pt-8 lg:pl-[50px] pl-[25px]">
                <h1 className='font-bold text-xl text-[#333333] mb-6'>Filter By Menu</h1>
                {/* items */}
                <div className="flex flex-col gap-4">
                    <Menu img="kebab.jpeg" title="Chicken Fry" num={26} />
                    <Menu img="noodles.jpeg" title="Burger Food" num={46} />
                    <Menu img="cake.jpeg" title="Pizza" num={16} />
                    <Menu img="cheeseBurger.jpeg" title="Fresh Fruits" num={36} />
                    <Menu img="card-7.jpeg" title="Vegetables" num={16} />
                </div>
            </div>

            {/* Tags */}
            <div className="w-full min-h-[308px] h-auto border-2 py-8 lg:pl-[55px] pl-[25px] lg:pr-0 pr-[10px] flex flex-col gap-4">
                <h1 className='font-bold text-xl text-[#333333]'>Popular Tags</h1>

                <div className='sm:w-[330px] w-[85%] flex flex-wrap sm:gap-4 gap-2 text-center'>

                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Sandwich</p>
                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Tikka</p>
                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Bbq</p>
                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Restaurant</p>
                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Chicken Sharma</p>
                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Health</p>
                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Fastfood</p>
                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Food</p>
                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Pizza</p>
                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Burger</p>
                    <p className='w-auto sm:h-[38px] h-[32px] border sm:px-[27px] px-[12px] sm:text-sm text-xs text-[#4F4F4F] sm:leading-[38px] leading-[32px]'>Chicken</p>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="w-full min-h-[316px] h-auto py-8 lg:pl-[38px] pl-[22px] border-2 flex flex-col gap-6">
                <h1 className='font-bold text-xl text-[#333333]'>Photo Gallery</h1>
                {/* Images */}
                <div className="flex flex-wrap sm:w-[362px] w-[92%] justify-center h-auto gap-4">
                    <Image className='sm:w-[110px] w-[80px] sm:h-[92px] h-[66px] object-cover object-center' src="/blog-2.jpeg" alt="gallery" width={110} height={92} />
                    <div className="sm:w-[110px] w-[80px] sm:h-[92px] h-[66px] relative">
                        <Image className='w-[24px] h-[22px] absolute left-[43px] top-[35px] z-10 object-contain object-center' src="/eye.png" alt="icon" width={24} height={22} />
                        <div className='w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)]'></div>
                        <Image className='w-full h-full object-cover object-center' src="/large-image.jpeg" alt="gallery" width={110} height={92} />
                    </div>
                    <Image className='sm:w-[110px] w-[80px] sm:h-[92px] h-[66px] object-cover object-center' src="/blog3.jpeg" alt="gallery" width={110} height={92} />
                    <Image className='sm:w-[110px] w-[80px] sm:h-[92px] h-[66px] object-cover object-center' src="/blog4.jpeg" alt="gallery" width={110} height={92} />
                    <Image className='sm:w-[110px] w-[80px] sm:h-[92px] h-[66px] object-cover object-center' src="/small-image-1.jpeg" alt="gallery" width={110} height={92} />
                    <Image className='sm:w-[110px] w-[80px] sm:h-[92px] h-[66px] object-cover object-center' src="/blog.jpeg" alt="gallery" width={110} height={92} />
                </div>
            </div>




            {/* Follow us */}
            <div className="w-full min-h-[158px] border-2 py-8 px-[57px]">
                <h1 className='font-bold text-xl text-[#333333]'>Follow Us</h1>

                <div className="flex flex-nowrap  mx-auto items-center gap-3 mt-5">

                    <Link className='sm:w-[52px] w-[30px] sm:h-[46px] h-[30px] flex items-center justify-center bg-[#FAF7F2]' target='_blank' href="https://www.twitter.com/">
                        <Image
                            className="object-center object-cover"
                            src="/t.png"
                            alt="twitter"
                            width={18}
                            height={19}
                        />
                    </Link>

                    <Link className='sm:w-[52px] w-[30px] sm:h-[46px] h-[30px] flex items-center justify-center bg-[#FAF7F2]' target='_blank' href="https://www.youtube.com/">
                        <Image
                            className="object-center object-cover"
                            src="/y.png"
                            alt="youtube"
                            width={21}
                            height={22}
                        />
                    </Link>

                    <Link className='sm:w-[52px] w-[30px] sm:h-[46px] h-[30px] flex items-center justify-center bg-[var(--primary-yellow)]' target='_blank' href="https://www.pinterest.com">
                        <Image
                            className="object-center object-cover"
                            src="/pw.png"
                            alt="instagram"
                            width={21}
                            height={21}
                        />
                    </Link>

                    <Link className='sm:w-[52px] w-[30px] sm:h-[46px] h-[30px] flex items-center justify-center bg-[#FAF7F2]' target='_blank' href="https://www.instagram.com">
                        <Image
                            className="object-center object-cover"
                            src="/i.png"
                            alt="instagram"
                            width={20}
                            height={19}
                        />
                    </Link>

                    <Link className='sm:w-[52px] w-[30px] sm:h-[46px] h-[30px] flex items-center justify-center bg-[#FAF7F2]' target='_blank' href="https://www.facebook.com">
                        <Image
                            className="object-center object-cover"
                            src="/f.png"
                            alt="facebook"
                            width={11}
                            height={19}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar