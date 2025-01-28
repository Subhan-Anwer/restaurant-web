import Header from '@/components/Header'
import Stats from '@/components/Stats'
import React from 'react'
import Starter from './Starter'
import MainCourse from './MainCourse'
import Deserts from './Deserts'
import Drinks from './Drinks'
import Partners from './Partners'
import Footer from '@/components/Footer'

const Menu = () => {
  return (
    <div className="bg-white">
      <Header title="Our Menu" link="Menu" />
      <div className='w-full h-auto py-[120px]'>
        {/* Starter */}
        <Starter />

        {/* Main Course */}
        <MainCourse />

        <Stats />

        {/* Deserts */}
        <Deserts />

        {/* Drinks */}
        <Drinks />

        {/* Partners & Clients */}
        <Partners />
      </div>
      <Footer />
    </div>
  )
}

export default Menu