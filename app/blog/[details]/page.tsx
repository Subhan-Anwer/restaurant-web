import React from 'react'
import Header from '@/components/Header'
import Sidebar from '../Sidebar'
import Image from 'next/image'

const page = () => {
    return (
        <div className='bg-white'>
            <Header link='Blog' title='Blog List' />

            <section className='w-full h-auto mx-auto flex flex-col lg:flex-row lg:items-start items-center justify-center px-4 gap-6'>
                <div className='flex flex-col gap-4 pb-9'>
                    <Image className='w-[871px] h-[520px] object-cover object-center' src="/blog-6.jpeg" alt='img' width={871} height={520} quality={100} />
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
                    <h2 className='font-bold text-xl sm:text-2xl text-[#333333]'>10 Reasons To Do A Digital Detox Challenge</h2>
                    {/* Divider */}
                    <div className='max-w-[694px] w-[85%] h-0 border-t mt-6'></div>
                    {/* description */}
                    <p className='max-w-[872px] h-auto text-[16px] text-[#4F4F4F] my-6'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat <br /><br />
                        Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
                        Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat
                        himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.
                    </p>

                    {/* Quote */}
                    <div className="max-w-[853px] w-full p-6 bg-[var(--primary-yellow)] flex sm:flex-row flex-col gap-[16px]">
                        <Image className='w-[48px] h-[48px] object-contain object-center' src="/quote.png" alt='icon' width={48} height={48} />
                        <p className='md:font-bold text-white md:text-2xl text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
                    </div>


                    <p className='max-w-[872px] h-auto text-[16px] text-[#4F4F4F] my-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>

                    <div className='flex lg:flex-row flex-col gap-7 pb-7'>
                        <p className='max-w-[420px] h-auto text-[16px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            <br /><br />
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                        </p>
                        <Image className='xl:w-[424px] lg:w-[380px] w-full xl:h-[366px] lg:h-[340px] sm:h-[520px] h-[380px] object-cover object-center' src="/product-5.jpeg" alt='img' width={424} height={366} quality={100} />
                    </div>


                    <p className='max-w-[872px] h-auto text-[16px] text-[#4F4F4F] my-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>

                    <div className="max-w-[872px] h-auto py-[18px] px-6 border flex flex-wrap items-center justify-between gap-4">
                        <p className='text-[16px] text-[#828282]'>
                            <span className='font-bold text-[#333333]'>Tags:</span> Restauran, Dinner, Pizza, Yummy
                        </p>
                        <div className="flex items-center gap-5">
                            <p className='text-[16px] font-bold text-[#333333]'>Share:</p>
                            <div className="flex gap-2">
                                <Image className='object-contain object-center' src="/f.png" alt='icon' width={10} height={18} />
                                <Image className='object-contain object-center' src="/t.png" alt='icon' width={16} height={18} />
                                <Image className='object-contain object-center' src="/i.png" alt='icon' width={17} height={16} />
                                <Image className='object-contain object-center' src="/p.png" alt='icon' width={16} height={18} />
                            </div>
                        </div>
                    </div>

                    {/* Comments */}
                    <div className='max-w-[872px] min-h-[472px] h-auto flex flex-col gap-8'>
                        <h3 className='font-bold text-[#333333] sm:text-[32px] text-[22px]'>Comments - 03</h3>
                        {/* Comment 1 */}
                        <div className='w-full min-h-[112px] h-auto flex gap-[9px]'>
                            <Image className='sm:w-[72px] w-[50px] sm:h-[65px] h-[50px] object-cover object-center rounded-[50%]' src="/comment1.jpeg" alt='icon' width={72} height={65} />
                            <div className='flex flex-col'>
                                <div className='flex gap-[18px]'>
                                    <p className='font-bold sm:text-[16px] text-[14px] text-[#333333]'>MD Sojib Khan</p>
                                    <div className="flex items-center gap-[2px]">
                                        <Image className='sm:w-[17px] w-[14px] sm:h-[18px] h-[15px] object-contain object-center' src="/ArrowBendDoubleUpLeft.png" alt='icon' width={17} height={18} />
                                        <p className='sm:text-[14px] text-[12px] text-[#333333]'>Reply</p>
                                    </div>
                                </div>

                                <div className="flex gap-[5px] items-center mt-2 mb-1">
                                    <Image className='sm:w-[26px] w-[21px] sm:h-[24px] h-[19px] object-contain object-center' src="/CalendarBlank.png" alt='icon' width={26} height={24} />
                                    <p className='sm:text-[14px] text-[12px] text-[#828282]'>June 22, 2020</p>
                                </div>
                                <p className='max-w-[7006px] sm:text-[16px] text-[13px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. </p>
                            </div>
                        </div>

                        {/* Comment 2 */}
                        <div className='w-full min-h-[112px] md:pl-[81px] sm:pl-[60px] pl-8 h-auto flex gap-[9px]'>
                            <Image className='sm:w-[72px] w-[50px] sm:h-[65px] h-[50px] object-cover object-center rounded-[50%]' src="/comment2.jpeg" alt='icon' width={72} height={65} />
                            <div className='flex flex-col'>
                                <div className='flex gap-[18px]'>
                                    <p className='font-bold sm:text-[16px] text-[14px] text-[#333333]'>MD Moon Khan</p>
                                    <div className="flex items-center gap-[2px]">
                                        <Image className='sm:w-[17px] w-[14px] sm:h-[18px] h-[15px] object-contain object-center' src="/ArrowBendDoubleUpLeftyelliow.png" alt='icon' width={17} height={18} />
                                        <p className='sm:text-[14px] text-[12px] text-[var(--primary-yellow)]'>Reply</p>
                                    </div>
                                </div>

                                <div className="flex gap-[5px] items-center mt-2 mb-1">
                                    <Image className='sm:w-[26px] w-[21px] sm:h-[24px] h-[19px] object-contain object-center' src="/CalendarBlank.png" alt='icon' width={26} height={24} />
                                    <p className='sm:text-[14px] text-[12px] text-[#828282]'>June 22, 2020</p>
                                </div>
                                <p className='max-w-[7006px] sm:text-[16px] text-[13px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. </p>
                            </div>
                        </div>

                        {/* Comment 3 */}
                        <div className='w-full min-h-[112px] h-auto flex gap-[9px]'>
                            <Image className='sm:w-[72px] w-[50px] sm:h-[65px] h-[50px] object-cover object-center rounded-[50%]' src="/comment3.jpeg" alt='icon' width={72} height={65} />
                            <div className='flex flex-col'>
                                <div className='flex gap-[18px]'>
                                    <p className='font-bold sm:text-[16px] text-[14px] text-[#333333]'>MD Gulli Khan</p>
                                    <div className="flex items-center gap-[2px]">
                                        <Image className='sm:w-[17px] w-[14px] sm:h-[18px] h-[15px] object-contain object-center' src="/ArrowBendDoubleUpLeft.png" alt='icon' width={17} height={18} />
                                        <p className='sm:text-[14px] text-[12px] text-[#333333]'>Reply</p>
                                    </div>
                                </div>

                                <div className="flex gap-[5px] items-center mt-2 mb-1">
                                    <Image className='sm:w-[26px] w-[21px] sm:h-[24px] h-[19px] object-contain object-center' src="/CalendarBlank.png" alt='icon' width={26} height={24} />
                                    <p className='sm:text-[14px] text-[12px] text-[#828282]'>June 22, 2020</p>
                                </div>
                                <p className='max-w-[7006px] sm:text-[16px] text-[13px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. </p>
                            </div>
                        </div>
                    </div>



                    {/* Post A Comment */}
                    <div className='max-w-[872px] w-full min-h-[484px] h-auto flex flex-col gap-6 border border-black p-2 sm:p-0'>
                        {/* Heading */}
                        <h3 className='font-bold text-[#333333] text-lg sm:text-[24px]'>Post a comment</h3>
                        {/* Divider */}
                        <div className='w-full h-0 border-t'></div>
                        {/* Name, Email */}
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                            <div className='w-full max-w-[424px] h-[56px]'>
                                <input
                                    type="text"
                                    placeholder='Name*'
                                    className='w-full h-full border border-[#E0E0E0] p-3 sm:p-4 text-sm sm:text-[16px] text-[#333333] focus:outline-none'
                                />
                            </div>
                            <div className='w-full max-w-[424px] h-[56px]'>
                                <input
                                    type="text"
                                    placeholder='Email*'
                                    className='w-full h-full border border-[#E0E0E0] p-3 sm:p-4 text-sm sm:text-[16px] text-[#828282] focus:outline-none'
                                />
                            </div>
                        </div>
                        {/* Comment */}
                        <div className='w-full h-[244px]'>
                            <textarea
                                placeholder='Comment*'
                                className='w-full h-full border border-[#E0E0E0] p-3 sm:py-4 text-sm sm:text-[16px] text-[#828282] focus:outline-none resize-none'
                            />
                        </div>
                        {/* Post Button */}
                        <div className='flex justify-start'>
                            <button className='w-full sm:w-[212px] h-[56px] bg-[var(--primary-yellow)] text-sm sm:text-[16px] text-white leading-[56px] hover:bg-[#ff920d] active:bg-[#ff6e0d] focus:outline-none'>
                                Post a comment
                            </button>
                        </div>
                    </div>


                </div>




                {/* Sidebar */}
                <Sidebar />
            </section>
        </div>
    )
}

export default page