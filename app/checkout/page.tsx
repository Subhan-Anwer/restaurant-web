import Header from '@/components/Header'
import React from 'react'
import ShippingAddress from './ShippingAddress'
import SideBar from './SideBar'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <div className='bg-white'>
            <Header title='Checkout Page' link='Checkout' />
            <section className='max-w-[1320px] w-full h-auto py-[120px] mx-auto'>
                <div className='w-full h-auto flex lg:flex-row flex-col lg:items-start items-center  gap-8 lg:gap-6'>
                    {/* Shipping address */}
                    <ShippingAddress/>

                    {/* Side Bar */}
                    <SideBar />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page