import React from 'react'
import Header from '@/components/Header'
import Sidebar from '../Sidebar'
import Image from 'next/image'

const page = () => {
    return (
        <div className='bg-white'>
            <Header link='Blog' title='Blog List' />

            <section className='w-full h-auto mx-auto flex flex-col md:flex-row md:items-start items-center justify-center px-4 gap-6'>
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
        <div className="flex gap-2"> {/* Reduced gap for smaller screens */}
            <Image className='object-contain object-center' src="/f.png" alt='icon' width={10} height={18} />
            <Image className='object-contain object-center' src="/t.png" alt='icon' width={16} height={18} />
            <Image className='object-contain object-center' src="/i.png" alt='icon' width={17} height={16} />
            <Image className='object-contain object-center' src="/p.png" alt='icon' width={16} height={18} />
        </div>
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