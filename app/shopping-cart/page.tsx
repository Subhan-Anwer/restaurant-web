import Header from '@/components/Header'
import React from 'react'
import ProductSection from './ProductSection'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='bg-white'>
      <Header title='Shopping Cart' link='Shopping cart' />

      {/* Products */}
      <ProductSection />


      {/* Content */}
      <section className='w-full h-auto mx-auto flex items-center justify-center px-4 '>
        <div className='max-w-[1320px] w-full min-h-[338px] h-auto flex xl:flex-nowrap flex-wrap justify-center gap-14 mb-[150px]'>
          {/* Coupon Code */}
          <div className='lg:w-[648px] w-full h-[252px] flex flex-col justify-between mb-3'>
            <h1 className='font-bold text-[32px] text-[#333333] mb-6'>Coupon Code</h1>
            <div className='w-full h-auto border border-[#E0E0E0] rounded-md flex flex-col gap-4 p-5'>
              <p className='lg:w-[472px] w-full sm:text-lg text-base text-[#828282]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
              </p>
              <div className="relative w-full">
                <div className='flex justify-between items-center w-full sm:h-[62px] h-[50px] '>
                  <input
                    className='w-full h-full border border-[#E0E0E0] rounded-md sm:pl-5 pl-2 text-[#333333] leading-[62px] focus:outline-none focus:border-[var(--primary-yellow)]'
                    type="text"
                    placeholder='Enter Here code'
                  />
                  <button className='absolute right-0 sm:w-[89px] w-16 h-full bg-[var(--primary-yellow)] rounded-md text-white hover:bg-[#ff920d] active:bg-[#ff6e0d] focus:outline-none'>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Total Bill */}
          <div className='lg:w-[648px] w-full h-auto flex flex-col justify-between'>
            <h1 className='font-bold sm:text-[32px] text-[27px] text-[#333333]'>Total Bill</h1>
            <div className='w-full h-auto border border-[#BDBDBD] rounded-md flex flex-col gap-4 p-5'>
              <div className='w-full flex justify-between font-bold sm:text-xl text-lg text-[#333333]'>
                <h5>Cart Subtotal</h5>
                <h5>$120.00</h5>
              </div>

              <div className='w-full flex justify-between sm:text-lg text-base text-[#4F4F4F]'>
                <h5>Shipping Charge</h5>
                <h5>$00.00</h5>
              </div>

              <div className='w-full h-[1px] bg-[#BDBDBD]'></div>

              <div className='w-full flex justify-between font-bold sm:text-xl text-lg text-[#333333]'>
                <h5>Total Amount</h5>
                <h5>$205.00</h5>
              </div>
            </div>

            {/* Button */}
            <button className='w-full h-16 bg-[var(--primary-yellow)] flex items-center justify-center gap-2 mt-4 rounded-md hover:bg-[#ff920d] active:bg-[#ff6e0d] focus:outline-none'>
              <p className='text-lg text-white leading-[64px] text-center'>Proceed to Checkout</p>
              <div className='w-5 h-5 bg-[url("/CheckSquareOffset.png")] bg-fill bg-no-repeat'></div>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default page