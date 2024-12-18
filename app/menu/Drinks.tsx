import React from 'react'
import Item from './Item'

const Drinks = () => {
  return (
    <section className='max-w-[1320px] w-full h-auto flex flex-col lg:flex-row items-center justify-between mx-auto mb-[120px] gap-8 lg:gap-0'>
          {/* Text */}
          <div className='flex flex-col gap-6 lg:w-[760px] w-full px-4 lg:px-0 mx-4'>
            {/* Icon & Title */}
            <div className='lg:mx-0 mx-auto'>
              <div className='w-6 h-6 bg-[url("/Coffee2.png")] bg-center bg-cover mb-2 lg:justify-self-start justify-self-center'></div>
              <h1 className='ld text-3xl lg:text-5xl text-[#333333]'>Drinks</h1>
            </div>

            {/* Items */}
            <div className='w-full max-w-[760px] mx-auto flex flex-col gap-6'>
              <Item
                text='Caffè macchiato'
                price='32$'
                desc='Toasted French bread topped with romano, cheddar'
                cal='560 CAL' />
              <Item
                text='Aperol Spritz Capacianno'
                price='43$'
                desc='Gorgonzola, ricotta, mozzarella, taleggio'
                cal='700 CAL' />
              <Item
                text='Caffe Latte Campuri'
                price='14$'
                desc='Ground cumin, avocados, peeled and cubed'
                cal='1000 CAL' />
              <Item
                text='Tormentoso BushTea Pintoage'
                price='35$'
                desc='Spreadable cream cheese, crumbled blue cheese'
                cal='560 CAL' />
            </div>

          </div>

          {/* Image */}
          <div className='w-full max-w-[448px] h-[300px] lg:h-[626px] bg-[url("/drinks.jpg")] bg-center bg-cover'></div>
        </section>
  )
}

export default Drinks