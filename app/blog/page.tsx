import Header from '@/components/Header'
import React from 'react'
import Sidebar from './Sidebar'
import Blog from './Blog'
import Pagination from './Pagination'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <div className='bg-white'>
            <Header link='Blog' title='Blog List' />

            <section className='w-full h-auto mx-auto flex flex-col md:flex-row md:items-start items-center justify-center px-4 gap-6'>
                <div className='flex flex-col gap-[70px] pb-32'>
                    <Blog img="blog-3.jpeg" heading='10 Reasons To Do A Digital Detox Challenge'/>
                    <Blog img="blog-2.jpeg" heading='Traditional Soft Pretzels with Sweet Beer Cheese'/>
                    <Blog img="blog-4.jpeg" heading='The Ultimate Hangover Burger: Egg in a Hole Burger'/>
                    <Blog img="blog-5.jpeg" heading='My Favorite Easy Black Pizza Toast Recipe'/>
                    <Pagination/>
                </div>
                {/* Sidebar */}
                <Sidebar/>
            </section>
            <Footer />
        </div>
    )
}

export default page