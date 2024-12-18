import Header from '@/components/Header'
import React from 'react'
import Card from './Card'

const page = () => {
  return (
    <div className='bg-white'>
        <Header title="FAQ Page" link="faq" />

        <section className='w-full h-auto py-[7.5rem] justify-self-center flex items-center justify-center'>
            <div className='max-w-[1320px] w-full h-auto gap-[56px] flex flex-col items-center justify-between'>
                {/* Title */}
                <div className='max-w-[771px] w-full min-h-[88px] h-auto text-center flex flex-col gap-2'>
                    <h1 className='font-bold md:text-5xl sm:text-3xl text-2xl text-[#333333]'>Questions Looks Here</h1>
                    <p className='md:text-base sm:text-sm text-xs w-full text-[#4f4f4f]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                </div>

                {/* Card Box */}
                <div className="w-full h-auto gap-6 grid md:grid-cols-2 grid-cols-1">
                    {/* Card 1 */}
                    <Card text="How we serve food?" />
                    {/* Card 2 */}
                    <Card text="How can we get in touch with you?" />
                    {/* Card 3 */}
                    <Card text="How is our food quality?" />
                    {/* Card 4 */}
                    <Card text="What will be delivered? And When?" />
                    {/* Card 5 */}
                    <Card text="How do we give home delivery?" />
                    {/* Card 6 */}
                    <Card text="Is this restaurant 24 hours open?" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default page