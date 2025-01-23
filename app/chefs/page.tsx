import Header from '@/components/Header'
import React from 'react'
import ChefCard from './ChefCard'

const page = () => {
    return (
        <div className='bg-white'>
            <Header title="Our Chef" link="chef" />


            <section className='w-full h-auto flex items-center justify-center justify-self-center'>
                <div className='max-w-[1320px] w-full min-h-[1386px] py-[120px] gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                    <ChefCard img="chef1.jpeg" name="Tahmina Rumi" />
                    <ChefCard img="chef2.jpg" name="Jorina Begum" />
                    <ChefCard img="chef3.jpg" name="M.Mohammad" />
                    <ChefCard img="chef4.jpg" name="Tahmina Rumi" />

                    <ChefCard img="chef5.jpg" name="Tahmina Rumi" />
                    <ChefCard img="chef6.jpg" name="Bisnu devgon" />
                    <ChefCard img="chef7.jpg" name="Motin Molladsf" />
                    <ChefCard img="chef8.jpg" name="William Rumi" />

                    <ChefCard img="chef9.jpg" name="Kets william roy" />
                    <ChefCard img="chef10.jpg" name="Mahmud kholil" />
                    <ChefCard img="chef11.jpg" name="Ataur Rahman" />
                    <ChefCard img="chef12.jpg" name="Monalisa holly" />
                </div>
            </section>
        </div>
    )
}

export default page