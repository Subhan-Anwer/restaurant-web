import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
        <Header title='Shopping Cart' link='Shopping cart' />


        {/* Content */}
        <section className='w-full h-auto mx-auto flex items-center justify-center border border-violet-600'>
            <div className='max-w-[1320px] w-full h-auto'></div>
        </section>
    </div>
  )
}

export default page