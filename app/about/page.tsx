import React from 'react'
import Header from '@/components/Header'
import Members from '@/components/Members';
import WhyChooseUsAbout from '@/components/WhyChooseUsAbout';
import AboutUsAbout from '@/components/AboutUsAbout';
import Testimonials from '@/components/Testimonials';
import OurFoodMenu from '@/components/OurFoodMenu';

const About = () => (
  <div className='bg-white overflow-hidden' >
    <Header title="About Us" link="About" />

    {/* About us */}
    <AboutUsAbout/>

    {/* Why choose us */}
    <WhyChooseUsAbout/>

    {/* Team members */}
    <Members/>

    <div className='w-full h-[110px] bg-white'></div>

    {/* Testimonials */}
    <Testimonials color='text-[#333333]'/>
    <div className='w-full h-[110px] bg-white'></div>

    {/* OurFoodMenu */}
    <OurFoodMenu/>

    <div className='w-full h-[110px] bg-white'></div>
  </div>
);


export default About