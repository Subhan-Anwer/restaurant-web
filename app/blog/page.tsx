import Header from '@/components/Header'
import StarRating from '@/components/StarRating'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Product from './Product'
import Menu from './Menu'

const page = () => {
    return (
        <div className='bg-white'>
            <Header link='Blog' title='Blog List' />

            <section className='w-full h-auto mx-auto flex items-center justify-center px-4'>
                {/* Sidebar */}
                <div className="max-w-[424px] w-[95%] h-[2501px] flex flex-col items-center gap-6">
                    {/* Search box */}
                    <div className='w-full h-[70px] flex'>
                        <input type="text" placeholder='Search Your Keyword...' className='border-2 w-[348px] p-5' />
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
                    <div className="w-full h-[423px] flex flex-col items-center justify-center border-2 text-center">
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
                        <p className="w-[321px] text-[#828282] text-base mb-[25px]">
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
                    <div className="w-full h-[592px] border-2 pt-8 px-[50px]">
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
                    <div className="w-full h-[490px] border-2 pt-8 px-[50px]">
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
                    <div className="w-full min-h-[308px] h-auto border-2 py-8 pl-[55px] pr-[43px] flex flex-col gap-4">
                        <h1 className='font-bold text-xl text-[#333333]'>Popular Tags</h1>

                        <div className='flex flex-wrap gap-4 text-center'>

                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Sandwich</p>
                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Tikka</p>
                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Bbq</p>
                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Restaurant</p>
                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Chicken Sharma</p>
                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Health</p>
                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Fastfood</p>
                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Food</p>
                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Pizza</p>
                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Burger</p>
                            <p className='w-auto h-[38px] border px-[27px] text-sm text-[#4F4F4F] leading-[38px]'>Chicken</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page